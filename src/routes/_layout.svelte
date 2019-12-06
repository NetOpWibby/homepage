<script>
  import Navigation from "~component/Navigation.svelte";
  export let segment;
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

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

  main {
    display: grid;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    position: relative;
    width: 100%;

    // @media (min-width: 601px) {
    //   &::after {
    //     width: 1px; height: 100%;
    //     top: 0; left: 149px;

    //     background-color: $inc-gray-3;
    //     content: "";
    //     position: fixed;
    //   }
    // }
  }

  :global(.header) {
    align-items: flex-end;
    background-color: $inc-gray-1;
    border-bottom: 1px solid $inc-gray-3;
    display: flex;
    font-weight: 400;
    padding: 1rem 1.5rem;
    position: sticky;
    top: 0;
    z-index: 1;

    @media (min-width: 601px) {
      height: 6.5rem;
    }

    @media (max-width: 600px) {
      height: 8rem;
    }

    h1 {
      font-size: 1.5rem;
      font-style: italic;
      line-height: 1;
    }
  }

  // :global(section) {
  //   @media (max-width: 600px) {
  //     &:last-of-type {
  //       margin-bottom: 4rem;
  //     }
  //   }
  // }
</style>

<svelte:head>
  <meta property="og:site_name" content="Lefty World"/>
</svelte:head>

<!-- <Navigation {segment}/> -->

<main>
  <slot></slot>
</main>
