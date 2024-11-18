<script lang="ts">
  //// import
  import { onMount } from "svelte";

  //// var
  const portraits = [
    "/images/netopwibby/01.jpg",
    "/images/netopwibby/02.jpg",
    "/images/netopwibby/03.jpg",
    "/images/netopwibby/04.jpg",
    "/images/netopwibby/05.jpg",
    "/images/netopwibby/06.jpg",
    "/images/netopwibby/07.jpg",
    "/images/netopwibby/08.jpg",
    "/images/netopwibby/09.jpg",
    "/images/netopwibby/10.jpg"
  ];

  let selfie = "";

  //// function
  function randomPortrait() {
    return portraits[Math.floor(Math.random() * portraits.length)];
  }

  onMount(async() => {
    selfie = randomPortrait();
  });
</script>

<style lang="scss">
  :root {
    --about-padding: calc(var(--padding) * 2);
  }

  h2 {
    line-height: 1;
  }

  h2 {
    margin: 0 0 var(--about-padding); padding: var(--padding) var(--about-padding);

    background-color: var(--color-border);
    color: var(--inc-yin-7);
    font-size: 1rem;
    line-height: inherit;
  }

  p {
    margin: 0; padding: 0 var(--about-padding) var(--about-padding);
    white-space: break-spaces;
  }

  hr {
    margin: 0 0 calc(var(--line-height) / 2) 0;
  }

  figure {
    padding: 0 var(--about-padding) var(--about-padding) var(--about-padding);

    img {
      margin: 0;
    }

    figcaption {
      padding-top: var(--about-padding);
      text-align: center;
    }
  }
</style>

<h2>about.webb.page</h2>

<p><strong>TL;DR bio:</strong> Architech × Excessively Black × East Coast kid on the West Coast × JU$T × Building a better Internet</p>

<p>I go by NetOperator Wibby, NetOpWibby, or netop://ウエブ pretty much everywhere online. "NetOperator" is the term given to <del>chronically online people</del> internet enthusiasts in the Megaman Battle Network series, one of my favorite game series of all time and constant source of inspiration.</p>

<p><strong>TL;DR career bio:</strong> From college dropout to self-taught designer turned developer during the 2008 recession → Stopped working on music to focus on family and career → lots of startup work → Now I work at a major fruit company. Not bad, eh? Bless the Internet.</p>

<p><strong>Short life bio:</strong> Voracious reader, absolutely loved mystery books: Encyclopedia Brown, Hardy Boys, Nancy Drew, Archie Comics, &amp;c. Frequently took things apart and collected scraps to build "inventions." Avid sketcher and jotter of ideas.</p>
<p>Majorly influenced by Pharrell Williams, Chad Hugo, Timbaland, Clipse, N.E.R.D, Nujabes, Shing02, Fat Jon, Five Deez, &amp;c and wanted to make music and beats. Performed exactly once and was recognized on the street afterwards ("your performance was <em>really</em> good"). Developed a perfectionist mindset, which is to blame for my debut album still under wraps (lyrics still hold up though), among other things.</p>
<p>Married the girl of my dreams in 2017 (maiden name? Page). We met on a web page in 9th grade, a little known social network called "Classface." Webb + Page. You can't make this up. Oh, and I lost my job four days after our wedding (IoT company imploded and we were the last to know). You wanna hear God laugh? Make plans. Now we have a loquat tree in our backyard in sunny California&hellip;LOL (Love Our Loquats)!</p>
<p>I try to live life according to The Golden Rule, and to stick to my ethics and morals as much as possible. It's bothersome when I find that others do not. But like&hellip;that's life? It's annoying though. You all should think like me!! 😤</p>

<hr/>

<p>Anyhoo, I love the internet. The internet has empowered me to learn, explore, and get inspired by so many cool people around the world. If you love yourself, you probably love others and aren't bigoted. That makes you cool as fuck. If this isn't you, I hope you find peace.</p>

{#if selfie === ""}
  <p>loading&hellip;</p>
{:else}
  <figure>
    <img alt="selfie" src={selfie}/>
    <figcaption>the most fantabulous</figcaption>
  </figure>
{/if}
