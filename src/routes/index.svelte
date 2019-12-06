<script>
  import About from "~component/About.svelte";
  import Center from "~component/Center.svelte";
  import Code from "~component/Code.svelte";
  import Webbring from "~component/Webbring.svelte";
  import Webbsites from "~component/Webbsites.svelte";
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    // padding: 1.75rem 1.5rem;

    // &:nth-of-type(3) {
    //   border-top: 5px solid $inc-gray-3;
    //   grid-area: 4 / 3 / 6 / 6;
    // }

    // &:nth-of-type(4) {
    //   border-right: 5px solid $inc-gray-3;
    //   grid-area: 3 / 1 / 6 / 3;
    // }
  }

  // p {
  //   font-size: 1rem;
  //   line-height: 1.55;

  //   code {
  //     background-color: $inc-black;
  //     border-radius: 0.2rem;
  //     color: $inc-gray-1;
  //     font-size: 70%;
  //     padding: 0.2rem 0.5rem;
  //     position: relative;
  //     top: -1px;

  //     &::selection {
  //       background-color: inherit;
  //       color: inherit;
  //     }
  //   }

  //   &:not(:last-child) {
  //     margin-bottom: 1rem;
  //   }
  // }
</style>

<svelte:head>
  <title></title>
  <meta name="description" content=""/>
  <meta property="og:description" content=""/>
  <meta property="og:image" content="/og.png"/>
  <meta property="og:title" content=""/>
</svelte:head>

<About/>
<Webbring/>
<Code/>
<Webbsites/>
<Center/>
