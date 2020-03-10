<script>
  import { createLink } from "~util";
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    border-bottom: 5px solid $inc-gray-3;
    padding: 1.75rem 1.5rem;

    @media (min-width: 1331px) {
      border-right: 5px solid $inc-gray-3;
      grid-area: 1 / 1 / 3 / 4;
    }

    @media (max-width: 1330px) {
      grid-area: 1 / 1 / 2 / 6;
    }

    @media(prefers-color-scheme: dark) {
      border-color: $inc-gray-7;
    }
  }

  span {
    cursor: help;
  }

  h2 {
    font-weight: 800;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.55;
  }
</style>

<section id="webb-about">
  <h2>Welcome to my homepage</h2>

  <p>Hello there! I am Paul Anthony Webb and an amalgam of nouns: <span title="I made this word up, it's basically a designer who also builds">archi<em>tech</em></span>, <span title="Ideas Never Cease!">dreamer</span>, <span title="I am striving to make parts of Megaman Battle Network a reality">MMBN fanatic</span>, <span title="We're the best!">lefty</span>, <span title="I used to make music and aspire to get back to it">musician</span>, <span title="1988 babeee!">Earth Dragon</span>, <span title="Interestingly, Aries and Dragons have similar traits so I'm double trouble">Aries</span>, <span title="So much so that I became a dad!">lover of puns and Dad jokes</span>, and just a general <span title="My Pinboard is full of all sorts of random things">purveyor of awesome shit</span>.</p>

  <br/>

  <h2>News</h2>

  <p><strong>2020.03.03</strong><br/>Sunnyvale, CA is my new home and I'm working with an awesome agency for a certain produce company.</p><br/>

  <p><strong>2019.07.26</strong><br/>I am part of the first podcast to be added to a <strong>permanent</strong> collection in {@html createLink({ destination: "https://www.fastcompany.com/90382351/smithsonians-african-american-museum-selects-the-first-podcast-for-its-collection", title: "Smithsonian’s African American Museum selects the first podcast for its collection", wrappedText: "the Smithsonian’s National Museum of African American History and Culture" })} (Black Panther film roundtable episode).</p>
</section>
