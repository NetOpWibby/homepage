<script lang="ts">
  //// var
  const bandcamp = [
    {
      by: "Yung Sun",
      id: "2006853030",
      title: "Past Future Artifacts",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "1972128885",
      title: "Don't Leave Me This Way (FRSH×RMX)",
      type: "single"
    },
    {
      by: "Yung Sun",
      id: "4219807572",
      title: "Music from the Love Lounge, Vol. 04",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "3091487133",
      title: "Spaceman Fresh",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "2247255572",
      title: "Music from the Love Lounge, Vol. 03",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "955213907",
      title: "Music from the Love Lounge, Vol. 02",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "1085756242",
      title: "The Aerobyss Files",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "2714432574",
      title: "The Construct",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "2723488137",
      title: "P.I. Noir - The Disappearance of Madamé Sélour",
      type: "album"
    },
    {
      by: "Yung Sun",
      id: "512177084",
      title: "Music from the Love Lounge, Vol. 01",
      type: "album"
    }
  ];

  let activeRelease = "3091487133";
</script>

<style lang="scss">
  h2 {
    margin: 0 0 calc(var(--padding)* 2); padding: var(--padding) calc(var(--padding) * 2);

    background-color: var(--color-border);
    color: var(--uchu-yin-7);
    font-size: 1rem;
    line-height: inherit;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  ul {
    line-height: 1;
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
        width: 1px; height: var(--list-indentation);
        top: calc(var(--list-indentation) * -0.75);
      }

      button {
        cursor: pointer;
        position: relative;

        &.active {
          padding-left: calc(var(--baseline) * 2);

          &::before {
            width: calc(var(--list-indentation) * 1.25); height: 1px;
            top: 50%; left: calc(calc(var(--baseline) * 2) * -1);

            background-color: var(--color-border);
            content: "";
            position: absolute;
          }
        }
      }
    }
  }

  .player {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    iframe {
      max-width: 700px;
      width: 100%;
    }

    &::before {
      width: 1px; height: calc(100% + 0.75rem);
      top: -0.75rem; left: calc(var(--list-indentation) * -0.75);

      background-color: var(--color-border);
      content: "";
      position: absolute;
    }
  }
</style>

<h2>music.webb.page</h2>

<ul>
  {#each bandcamp as release (release.id)}
    <li>
      <button
        class:active={activeRelease === release.id}
        on:click={() => activeRelease === release.id ? activeRelease = "" : activeRelease = release.id}>{release.title} by {release.by}</button>

      {#if activeRelease === release.id}
        <div class="player">
          <img alt={release.title + " art"} src={"/images/bandcamp/" + release.id + ".jpg"}/>
          <!-- svelte-ignore a11y-missing-attribute -->
          {#if release.type === "album"}
            <iframe style="height: 300px;" src="https://bandcamp.com/EmbeddedPlayer/album={release.id}/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/" seamless></iframe>
          {:else}
            <iframe style="height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track={release.id}/size=small/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/" seamless></iframe>
          {/if}
        </div>
      {/if}
    </li>
  {/each}
</ul>
