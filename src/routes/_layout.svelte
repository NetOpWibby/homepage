<script></script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  @include font-face(800, "../type/sans", "Lefty Sans");
  @include font-face(600, "../type/sans", "Lefty Sans");
  @include font-face(400, "../type/sans", "Lefty Sans");

  :global(html) {
    background-color: $inc-gray-1;
  }

  :global(x-app) {
    @include font-sans("Lefty Sans");
    color: $inc-gray-8;
    min-height: 100vh;
    display: flex;
  }

  :global(code) {
    @include font-mono("SF Mono");
    font-weight: 600;
  }

  :global(a) {
    color: $inc-blue-4;
    font-weight: 600;

    &:hover {
      color: #0f4c81;
    }
  }

  main {
    position: relative;
    width: 100%;

    @media (min-width: 1331px) {
      display: grid;
      grid-column-gap: 0;
      grid-row-gap: 0;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }

    @media (max-width: 1330px) {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <meta property="og:site_name" content="The Webb Page"/>
</svelte:head>

<main>
  <slot></slot>
</main>
