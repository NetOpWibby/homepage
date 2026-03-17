<script lang="ts">
  /*** STATE -------------------------------------------- ***/
  const remarks = [
    "WR-020.txt",
    "WR-019.txt",
    "WR-018.txt",
    "WR-017.txt",
    "WR-016.txt",
    "WR-015.txt",
    "WR-014.txt",
    "WR-013.txt",
    "WR-012.txt",
    "WR-011.txt",
    "WR-010.txt",
    "WR-009.txt",
    "WR-008.txt",
    "WR-007.txt",
    "WR-006.txt",
    "WR-005.txt",
    "WR-004.txt",
    "WR-003.txt",
    "WR-002.txt",
    "WR-001.txt"
  ];

  let selectedRemark: string;
  let selectedRemarkContent: string;

  /*** HELPER ------------------------------------------- ***/
  function processNote(filename: string): string {
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

  async function showNote(slug: string) {
    if (slug === selectedRemark) {
      document.querySelector("li.active")!.classList.remove("active");
      selectedRemark = ""; /*** toggle ***/
    } else {
      selectedRemarkContent = "\nloading…\n";
      selectedRemark = slug;

      try {
        const response = await fetch("/api/remarks.json", {
          body: JSON.stringify({ filename: slug }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          method: "POST"
        });

        const { content } = await response.json();
        selectedRemarkContent = content;
      } catch(error) {
        console.error(error);
      }
    }
  }
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
  <a href="https://blog.webb.page/remarks" target="_blank">blog.webb.page/remarks</a>
</h2>

<ul>
  {#each remarks as remark}
    <li class:active={selectedRemark === remark}>
      <button on:click={() => showNote(remark)}>{@html processNote(remark)}</button>

      {#if selectedRemark === remark}
        <div class="content">
          {@html selectedRemarkContent}
        </div>
      {/if}
    </li>
  {/each}
</ul>
