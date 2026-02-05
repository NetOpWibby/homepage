<script lang="ts">
  //// import
  import { version } from "../../package.json";

  //// component
  import About from "$lib/component/About.svelte";
  import Blog from "$lib/component/Blog.svelte";
  import CV from "$lib/component/CV.svelte";
  import Music from "$lib/component/Music.svelte";
  import MyMusic from "$lib/component/MyMusic.svelte";
  import Remarks from "$lib/component/Remarks.svelte";
  import Project from "$lib/component/Project.svelte";
  import Promo from "$lib/component/Promo.svelte";
  import Ring from "$lib/component/Ring.svelte";
  import Social from "$lib/component/Social.svelte";
  import Support from "$lib/component/Support.svelte";
  import Uses from "$lib/component/Uses.svelte";
</script>

<style lang="scss">
  :root {
    --color-border: var(--uchu-yin-2);
  }

  section {
    max-width: 700px;
    overflow-y: auto;

    @media (min-width: 601px) {
      min-width: 500px;
      width: 45vw;
    }

    @media (max-width: 600px) {
      width: 75vw;
    }

    &:not(:last-of-type) {
      margin-right: 30px;
    }

    &:last-of-type {
      margin-right: var(--line-height);
    }
  }

  .full-height {
    height: 100%;
  }

  .with-background {
    background-color: var(--uchu-gray-2);
    overflow-x: hidden;
  }
</style>

<svelte:head>
  <meta name="version" content={version}/>
</svelte:head>

<section>
  <aside class="with-background">
    <About/>
  </aside>
</section>

<section>
  <aside class="with-background">
    <Support/>
  </aside>

  <aside class="with-background">
    <CV/>
  </aside>
</section>

<section>
  <aside class="with-background">
    <Remarks/>
  </aside>

  <aside class="with-background">
    <Blog/>
  </aside>
</section>

<section>
  <aside class="with-background">
    <Social/>
  </aside>

  <aside class="with-background">
    <Promo/>
  </aside>

  <aside class="with-background">
    <Uses/>
  </aside>
</section>

<section class="full-height with-background">
  <Project/>
</section>

<section class="full-height with-background">
  <MyMusic/>
</section>

<section class="full-height with-background">
  <Ring/>
</section>

<section class="full-height with-background">
  <Music/>
</section>
