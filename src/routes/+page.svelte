<script lang="ts">
  //// import
  import { version } from "../../package.json";

  //// component
  import About from "$lib/component/About.svelte";
  import Blog from "$lib/component/Blog.svelte";
  import Music from "$lib/component/Music.svelte";
  import MyMusic from "$lib/component/MyMusic.svelte";
  import Notes from "$lib/component/Notes.svelte";
  import Project from "$lib/component/Project.svelte";
  import Promo from "$lib/component/Promo.svelte";
  import Ring from "$lib/component/Ring.svelte";
  import Social from "$lib/component/Social.svelte";
</script>

<style lang="scss">
  :root {
    --color-border: var(--inc-yin-2);
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
    background-color: var(--inc-gray-2);
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
    <Notes/>
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
