<script lang="ts">
  /*** STATE -------------------------------------------- ***/
  const memos = [
    "WM-082.txt",
    "WM-081.txt",
    "WM-080.txt",
    "WM-079.txt",
    "WM-078.txt",
    "WM-077.txt",
    "WM-076.txt",
    "WM-075.txt",
    "WM-074.txt",
    "WM-073.txt",
    "WM-072.txt",
    "WM-071.txt",
    "WM-070.txt",
    "WM-069.txt",
    "WM-068.txt",
    "WM-067.txt",
    "WM-066.txt",
    "WM-065.txt",
    "WM-064.txt",
    "WM-063.txt",
    "WM-062.txt",
    "WM-061.txt",
    "WM-060.txt",
    "WM-059.txt",
    "WM-058.txt",
    "WM-057.txt",
    "WM-056.txt",
    "WM-055.txt",
    "WM-054.txt",
    "WM-053.txt",
    "WM-052.txt",
    "WM-051.txt",
    "WM-050.txt",
    "WM-049.txt",
    "WM-048.txt",
    "WM-047.txt",
    "WM-046.txt",
    "WM-045.txt",
    "WM-044.txt",
    "WM-043.txt",
    "WM-042.txt",
    "WM-041.txt",
    "WM-040.txt",
    "WM-039.txt",
    "WM-038.txt",
    "WM-037.txt",
    "WM-036.txt",
    "WM-035.txt",
    "WM-034.txt",
    "WM-033.txt",
    "WM-032.txt",
    "WM-031.txt",
    "WM-030.txt",
    "WM-029.txt",
    "WM-028.txt",
    "WM-027.txt",
    "WM-026.txt",
    "WM-025.txt",
    "WM-024.txt",
    "WM-023.txt",
    "WM-022.txt",
    "WM-021.txt",
    "WM-020.txt",
    "WM-019.txt",
    "WM-018.txt",
    "WM-017.txt",
    "WM-016.txt",
    "WM-015.txt",
    "WM-014.txt",
    "WM-013.txt",
    "WM-012.txt",
    "WM-011.txt",
    "WM-010.txt",
    "WM-009.txt",
    "WM-008.txt",
    "WM-007.txt",
    "WM-006.txt",
    "WM-005.txt",
    "WM-004.txt",
    "WM-003.txt",
    "WM-002.txt",
    "WM-001.txt"
  ];

  let selectedMemo: string;
  let selectedMemoContent: string;

  /*** HELPER ------------------------------------------- ***/
  function processMemo(filename: string): string {
    const extensionRegex = /\.[^.]+$/;         /*** file extension ***/
    const specialCharsRegex = /[^a-zA-Z0-9]/g; /*** special characters ***/
    const extensionMatch = filename.match(extensionRegex);
    let processedFilename = filename;
    let wrappedExtension = "";

    if (extensionMatch) {
      processedFilename = filename.slice(0, extensionMatch.index);
      wrappedExtension = extensionMatch[0].replace(extensionRegex, (match) => `<span class="special-char">${match}</span>`);
    }

    return processedFilename.replace(specialCharsRegex, (match) => `<span class="special-char">${match}</span>`) + wrappedExtension;
  }

  async function showMemo(slug: string) {
    if (slug === selectedMemo) {
      document.querySelector("li.active")!.classList.remove("active");
      selectedMemo = ""; /*** toggle ***/
    } else {
      selectedMemoContent = "\nloading…\n";
      selectedMemo = slug;

      try {
        const response = await fetch("/api/blog.json", {
          body: JSON.stringify({ filename: slug }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          method: "POST"
        });

        const { content } = await response.json();
        selectedMemoContent = content;
      } catch(error) {
        console.error(error);
      }
    }
  }
</script>

<style lang="scss">
  h2 {
    margin: 0 0 calc(var(--padding) * 2); padding: var(--padding) calc(var(--padding) * 2);

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
      color: var(--uchu-yin-4);
      text-decoration: underline var(--uchu-yin-2);
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
    color: var(--uchu-yin-3);
  }

  :global(.special-char) {
    color: var(--uchu-yin-3);
  }
</style>

<h2>
  <a href="https://blog.webb.page" target="_blank">blog.webb.page</a>
</h2>

<ul>
  {#each memos as memo}
    <li class:active={selectedMemo === memo}>
      <button on:click={() => showMemo(memo)}>{@html processMemo(memo)}</button>

      {#if selectedMemo === memo}
        <div class="content">
          {@html selectedMemoContent}
        </div>
      {/if}
    </li>
  {/each}
</ul>
