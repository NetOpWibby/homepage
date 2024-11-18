<script lang="ts">
  //// var
  const posts = [
    "2024-11-13-elon-mind-virus.txt",
    "2024-11-08-farcaster.txt",
    "2024-11-06-election.txt",
    "2024-09-16-personal-renaissance.txt",
    "2024-01-16-manifesto.neue.txt",
    "2023-07-17-twitter.txt",
    "2022-04-24-things-i-learned.txt",
    "2021-08-05-four-years-to-show-and-prove.txt",
    "2021-05-15-secure-handshake-and-caddy.txt",
    "2021-02-15-an-update-on-socii.txt",
    "2021-01-15-the-internet-is-broken.txt",
    "2021-01-03-new-year-who-dis.txt",
    "2020-02-27-small-modules-and-plumbing.txt",
    "2020-01-28-migrating-from-mongo-to-rethink.txt",
    "2019-12-31-the-next-decade.txt",
    "2019-12-29-year-in-review.txt",
    "2019-12-02-a-personal-api.txt",
    "2019-09-24-a-decade-in-tech.txt",
    "2019-09-08-socii-dispatch-07.txt",
    "2019-06-09-future-of-the-operating-system-revisited-i.txt",
    "2019-03-07-facebook-and-their-bullshit.txt",
    "2019-01-02-neat-npm-01.txt",
    "2018-12-31-year-in-review.txt",
    "2018-12-19-my-wants-for-2019.txt",
    "2018-08-22-the-fallacy-of-imposter-syndrome.txt",
    "2018-07-09-socii-dispatch-05.txt",
    "2018-05-17-decentralization-privacy-and-more.txt",
    "2018-04-17-socii-dispatch-04.txt",
    "2018-02-24-socii-dispatch-03.txt",
    "2018-02-10-using-nginx-express-session-in-production.txt",
    "2018-02-10-socii-dispatch-02.txt",
    "2018-02-09-nginx-and-socketio.txt",
    "2018-01-19-socii-dispatch-01.txt",
    "2018-01-11-why-the-job-search-sucks.txt",
    "2017-12-31-year-in-review.txt",
    "2017-12-30-who-creates-social-networks.txt",
    "2017-12-05-easy-deployment-with-vagrant.txt",
    "2017-11-26-antank-case-for-nintendo-switch-review.txt",
    "2017-11-14-nintendo-switch-browser-capabilities.txt",
    "2017-11-03-apfs-preboot-volume-woes.txt",
    "2017-10-29-how-i-met-my-wife.txt",
    "2017-09-12-iphone-x-dream-phone.txt",
    "2017-09-03-1984-review.txt",
    "2017-09-01-interview-with-mailchimp.txt",
    "2017-08-19-im-done-with-kickstarter.txt",
    "2017-07-27-neglected-projects.txt",
    "2017-06-13-beachfront-digital-june-update.txt",
    "2017-05-06-black-privilege-review.txt",
    "2017-05-01-v2-of-beachfront-digital-is-live.txt",
    "2017-04-11-beachfront-digital-april-update.txt",
    "2017-03-18-nintendo-switch-review.txt",
    "2017-02-08-roadmap-for-beachfront-digital.txt",
    "2017-02-07-count-zero-review.txt",
    "2017-01-25-the-swedish-life.txt",
    "2017-01-07-macbook-pro-review.txt",
    "2017-01-01-books-i-plan-to-read-this-year.txt",
    "2016-12-27-what-ive-achieved-this-year.txt",
    "2016-12-26-it-begins.txt"
  ];

  let selectedPost: string;
  let selectedPostContent: string;

  //// function
  function processPost(filename: string): string {
    const dateRegex = /^\d{4}-\d{2}-\d{2}/;    /// date format YYYY-MM-DD
    const extensionRegex = /\.[^.]+$/;         /// file extension
    const specialCharsRegex = /[^a-zA-Z0-9]/g; /// special characters

    const dateMatch = filename.match(dateRegex);
    const extensionMatch = filename.match(extensionRegex);
    let processedFilename = filename;
    let wrappedExtension = "";

    if (extensionMatch) {
      processedFilename = filename.slice(0, extensionMatch.index);
      wrappedExtension = extensionMatch[0].replace(extensionRegex, (match) => `<span class="special-char">${match}</span>`);
    }

    if (dateMatch) {
      const date = dateMatch[0];
      const restOfFilename = processedFilename.slice(date.length);

      const wrappedDate = `<span class="date">${date}</span>`;
      const wrappedRestOfFilename = restOfFilename.replace(specialCharsRegex, (match) => `<span class="special-char">${match}</span>`);

      return wrappedDate + wrappedRestOfFilename + wrappedExtension;
    }

    return processedFilename.replace(specialCharsRegex, (match) => `<span class="special-char">${match}</span>`) + wrappedExtension;
  }

  async function showPost(slug: string) {
    if (slug === selectedPost) {
      document.querySelector("li.active")!.classList.remove("active");
      selectedPost = ""; /// toggle
    } else {
      selectedPostContent = "\nloading…\n";
      selectedPost = slug;

      try {
        const response = await fetch("http://localhost:6433/api/blog.json", {
          body: JSON.stringify({ filename: slug }),
          headers: { "Content-Type": "text/plain" },
          method: "POST"
        });

        const { content } = await response.json();
        selectedPostContent = content;
      } catch(error) {
        console.error(error);
      }
    }
  }
</script>

<style lang="scss">
  h2, ul {
    line-height: 1;
  }

  h2 {
    margin: 0 0 calc(var(--padding)* 2); padding: var(--padding) calc(var(--padding) * 2);

    background-color: var(--color-border);
    color: var(--inc-yin-7);
    font-size: 1rem;
    line-height: inherit;
  }

  ul {
    margin-left: calc(var(--list-indentation) / 2);
    padding: 0 var(--list-indentation) calc(var(--list-indentation) * 4) 0;

    li {
      margin: 0; padding: 0 0 var(--baseline) calc(var(--baseline) * 2);
      position: relative;

      &::before,
      &::after {
        background-color: var(--color-border);
        content: "";
        left: 0;
        position: absolute;
      }

      &::before {
        width: calc(var(--list-indentation) / 2); height: 1px;
        top: calc(var(--list-indentation) / 4);
      }

      &::after {
        top: calc(var(--list-indentation) * -0.75);
        width: 1px;
      }

      &:not(.active) {
        &::after {
          height: var(--list-indentation);
        }
      }

      &.active::after {
        height: 100%;
      }
    }
  }

  button {
    cursor: pointer;

    &:hover {
      color: var(--inc-yin-4);
      text-decoration: underline var(--inc-yin-2);
    }
  }

  .content {
    line-height: 1.55;
    position: relative;
    white-space: pre-wrap;

    text-overflow: ellipsis;
    overflow-x: hidden;

    &::before {
      width: 1px; height: calc(100% + 0.75rem);
      top: -0.75rem; left: calc(var(--list-indentation) * -0.75);

      background-color: var(--color-border);
      content: "";
      position: absolute;
    }
  }

  :global(.date) {
    color: var(--inc-yin-3);
  }

  :global(.special-char) {
    color: var(--inc-yin-3);
  }
</style>

<h2>
  <a href="https://blog.webb.page" target="_blank">blog.webb.page</a>
</h2>

<ul>
  {#each posts as post}
    <li class:active={selectedPost === post}>
      <button on:click={() => showPost(post)}>{@html processPost(post)}</button>

      {#if selectedPost === post}
        <div class="content">
          {selectedPostContent}
        </div>
      {/if}
    </li>
  {/each}
</ul>
