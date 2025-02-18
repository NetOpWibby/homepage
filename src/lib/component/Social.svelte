<script lang="ts">
  //// import
  import { format as formatDate } from "timeago.js";
  import { onMount } from "svelte";

  //// var
  const videoRegex = /\.(mp4|mov|avi|wmv|flv|mkv|webm|m4v)$/i;
  let mastodonLoaded = false;
  let mastodonPostContent = "";
  let mastodonPostDate = "";
  let mastodonPostLink = "";
  let mastodonPostMedia: string[] = [];

  //// function
  async function mastodon() {
    const response = await fetch("/api/mastodon.json", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    const { created, content, link, media } = await response.json();

    mastodonPostContent = content;
    mastodonPostDate = created;
    mastodonPostLink = link;
    mastodonPostMedia = media;
    mastodonLoaded = true;
  }

  //// ready
  onMount(() => {
    mastodon();
  });
</script>

<style lang="scss">
  h2 {
    margin: 0 0 calc(var(--padding)* 2); padding: var(--padding) calc(var(--padding) * 2);

    background-color: var(--color-border);
    color: var(--inc-yin-7);
    font-size: 1rem;
    line-height: inherit;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  blockquote {
    padding: 0 calc(var(--padding) * 2) calc(var(--padding) * 2);
    white-space: normal;
  }

  .media {
    display: flex;
    flex-direction: row;
    margin-bottom: var(--padding);

    figure {
      margin: 0 var(--padding) var(--padding) 0;
    }

    img {
      width: 100%; height: 100%;
      object-fit: contain;
    }
  }

  :global(blockquote p) {
    margin-bottom: calc(var(--block-spacing-bottom) / 2);
    padding-top: 0;
  }
</style>

<h2>social.webb.page/mastodon</h2>

{#if mastodonLoaded}
  <blockquote cite={mastodonPostLink}>
    {@html mastodonPostContent}

    {#if mastodonPostMedia.length}
      <div class="media">
        {#each mastodonPostMedia as media}
          {#if videoRegex.test(media)}
            <!-- svelte-ignore a11y-media-has-caption -->
            <video controls>
              <source src={media}/>
            </video>
          {:else}
            <figure>
              <img alt="mastodon media" src={media}/>
              <figcaption></figcaption>
            </figure>
          {/if}
        {/each}
      </div>
    {/if}

    <p>&mdash;
      <a href={mastodonPostLink} rel="nofollow noopener noreferrer" target="_blank">
        <time datetime={mastodonPostDate}>{formatDate(mastodonPostDate)}</time>
      </a>
    </p>
  </blockquote>
{:else}
  <blockquote>
    <p>loading&hellip;</p>
  </blockquote>
{/if}
