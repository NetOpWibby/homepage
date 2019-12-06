<script>
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    border-right: 5px solid $inc-gray-3;
    grid-area: 3 / 1 / 6 / 3;
    padding: 1.75rem 1.5rem;
  }

  h2 {
    font-weight: 800;
    margin-bottom: 1rem;
  }

  ul {
    width: 100%; height: calc(100% - 0.5rem);

    font-size: 1rem;
    line-height: 1.55;
    list-style-type: circle;
    padding-bottom: 2rem;
    padding-left: 0.25rem;

    li:hover {
      list-style-type: disc;
    }
  }

  a {
    color: $inc-blue-4;
    font-weight: 600;

    &:hover {
      color: #0f4c81;
    }
  }
</style>

<section>
  <h2>Webbsites &middot; Experiences I've built</h2>

  <ul>
    <li>
      <a href="https://beachfront.digital" title="">Beachfront</a>
      &middot;
      Domain name portfolio management. Kinda abandoned but still works.
    </li>

    <li>
      <a href="https://chew.sh" title="">Chew</a>
      &middot;
      Server-side analytics because we all use blockers.
    </li>

    <li>
      <a href="https://chronver.org" title="">ChronVer</a>
      &middot;
      SemVer doesn't make sense in 20XX so I made ChronVer.
    </li>

    <li>
      <a href="https://dsgn.agency" title="">dsgn.</a>
      &middot;
      A design agency I made with Jesse Youngblood. Give us money and you'll be happy.
    </li>

    <li>
      <a href="https://hikar.io" title="">hikariOS</a>
      &middot;
      Splash page for my operating system. Why are you smirking?
    </li>

    <li>
      <a href="https://inc.sh" title="">Ideas Never Cease</a>
      &middot;
      Parent company for my (obviously) endless ideas.
    </li>

    <li>
      <a href="https://lefty.world" title="">Lefty World</a>
      &middot;
      Lefties, our time has come!
    </li>

    <li>
      <a href="https://socii.network" title="">Socii</a>
      &middot;
      I'm building a social network. Stop laughing.
    </li>

    <li>
      <a href="/" title="">Webb Page</a>
      &middot;
      You're already here!
    </li>

    <li>
      <a href="https://weom.space" title="">WEÖM</a>
      &middot;
      Wisdom Escapes Ordinary Minds
    </li>
  </ul>
</section>
