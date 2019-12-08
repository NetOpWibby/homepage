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
</style>

<svelte:head>
  <title>The Webb Page</title>
  <meta name="description" content="There are many webpages but only one webbpage and it's mine. Welcome to Paul Anthony Webb's home on the 'Net."/>
  <meta property="og:description" content="There are many webpages but only one webbpage and it's mine. Welcome to Paul Anthony Webb's home on the 'Net."/>
  <meta property="og:image" content="/og.jpg"/>
  <meta property="og:title" content="The Webb Page"/>
</svelte:head>

<About/>
<Webbring/>
<Code/>
<Webbsites/>
<Center/>
