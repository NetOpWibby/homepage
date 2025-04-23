<script lang="ts">
  //// import
  import { onMount } from "svelte";

  //// var
  let cv = "";

  //// function
  async function showContent() {
    let cvContent = "";

    try {
      const response = await fetch("/api/cv.json", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const { content } = await response.json();
      cvContent = content;
    } catch(error) {
      console.error(error);
    }

    return cvContent;
  }

  onMount(async() => {
    cv = await showContent();
  });
</script>

<style lang="scss">
  :root {
    --cv-padding: calc(var(--padding) * 2);
  }

  h2 {
    margin: 0 0 var(--cv-padding); padding: var(--padding) var(--cv-padding);

    background-color: var(--color-border);
    color: var(--uchu-yin-7);
    font-size: 1rem;
    line-height: inherit;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .content {
    font-family: monospace;
    line-height: 1.55;
    overflow-x: hidden;
    padding-left: var(--cv-padding);
    padding-right: var(--cv-padding);
    position: relative;
    text-overflow: ellipsis;
    white-space: pre-line;

    &.loading {
      padding-bottom: var(--cv-padding);
    }
  }
</style>

<h2>
  <a href="https://cv.webb.page" target="_blank">cv.webb.page</a>
</h2>

{#if cv === ""}
  <div class="content loading">loading&hellip;</div>
{:else}
  <div class="content">
    {cv}
  </div>
{/if}
