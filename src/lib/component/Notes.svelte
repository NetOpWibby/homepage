<script lang="ts">
  //// var
  const notes = [
    "009-write-human-code.txt",
    "008-use-your-own-domain-bluesky.txt",
    "007-goals-and-systems-quote.txt",
    "006-export-farcaster.txt",
    "005-youtube-dl-tips.txt",
    "004-sass-import-breaking.txt",
    "003-setinterval-typescript.txt",
    "002-quincy-sinatra-quote.txt",
    "001-package-control.txt"
  ];

  let selectedNote: string;
  let selectedNoteContent: string;

  //// function
  function processNote(filename: string): string {
    const extensionRegex = /\.[^.]+$/;         /// file extension
    const numberRegex = /^\d{3}/;              /// ###
    const specialCharsRegex = /[^a-zA-Z0-9]/g; /// special characters

    const dateMatch = filename.match(numberRegex);
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

  async function showNote(slug: string) {
    if (slug === selectedNote) {
      document.querySelector("li.active")!.classList.remove("active");
      selectedNote = ""; /// toggle
    } else {
      selectedNoteContent = "\nloading…\n";
      selectedNote = slug;

      try {
        const response = await fetch("/api/notes.json", {
          body: JSON.stringify({ filename: slug }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          method: "POST"
        });

        const { content } = await response.json();
        selectedNoteContent = content;
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
    padding: 0 var(--list-indentation) calc(var(--list-indentation) / 2) 0;

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
  <a href="https://blog.webb.page/notes" target="_blank">blog.webb.page/notes</a>
</h2>

<ul>
  {#each notes as note}
    <li class:active={selectedNote === note}>
      <button on:click={() => showNote(note)}>{@html processNote(note)}</button>

      {#if selectedNote === note}
        <div class="content">
          {selectedNoteContent}
        </div>
      {/if}
    </li>
  {/each}
</ul>
