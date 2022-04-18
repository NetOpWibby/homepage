<script lang="ts">
  import { createLink } from "~util";
</script>

<style lang="scss">
  section {
    border-bottom: 5px solid var(--inc-gray-3);

    @media (min-width: 1331px) {
      border-right: 5px solid var(--inc-gray-3);
      grid-area: 1 / 1 / 3 / 4;
    }

    @media (max-width: 1330px) {
      grid-area: 1 / 1 / 2 / 6;
    }

    @media(prefers-color-scheme: dark) {
      border-color: var(--inc-gray-7);
    }
  }

  span {
    cursor: help;
  }
</style>

<section id="webb-about">
  <h2>Welcome to my homepage</h2>

  <p>Hello there! I am Paul Anthony Webb and an amalgam of nouns: <span title="I made this word up, it's basically a designer who also builds">archi<em>tech</em></span>, <span title="Ideas Never Cease!">dreamer</span>, <span title="I am striving to make aspects of Megaman Battle Network a reality">MMBN fanatic</span>, <span title="We're the best!">lefty</span>, <span title="I used to make music and aspire to get back to it">musician</span>, <span title="1988 babeee!">Earth Dragon</span>, <span title="Interestingly, Aries and Dragons have similar traits so I'm double trouble">Aries</span>, <span title="So much so that I became a dad!">lover of puns and Dad jokes</span>, and just a general <span title="My Pinboard is full of all sorts of random things">purveyor of awesome shit</span>.</p>

  <h2>News</h2>

  <p><code>2022.03.16</code><br/>Gave a {@html createLink({ destination: "https://youtu.be/ct-CZV3rtNM", title: "Registries, Registrars, and You: How to make the most of your TLD (and other considerations)", wrappedText: "45-minute presentation" })} at HandyCon 2022.</p>

  <p><code>2021.11.12</code><br/>Moved to Cupertino, CA to work with an agency for a certain produce company.</p>

  <p><code>2019.07.26</code><br/>Inducted into {@html createLink({ destination: "https://www.fastcompany.com/90382351/smithsonians-african-american-museum-selects-the-first-podcast-for-its-collection", title: "Smithsonian’s African American Museum selects the first podcast for its collection", wrappedText: "the Smithsonian’s National Museum of African American History and Culture" })} (Black Panther film roundtable episode).</p>
</section>
