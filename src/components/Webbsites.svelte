<script>
  import { createLink } from "~util";
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    padding: 1.75rem 1.5rem;

    @media (min-width: 1331px) {
      border-right: 5px solid $inc-gray-3;
      grid-area: 3 / 1 / 6 / 3;
    }
  }

  h2 {
    font-weight: 800;
    margin-bottom: 1rem;
  }

  ul {
    font-size: 1rem;
    line-height: 1.55;
    list-style-type: circle;
    padding-left: 0.25rem;
    width: 100%;

    @media (min-width: 1331px) {
      height: calc(100% - 0.5rem);
      padding-bottom: 2rem;
    }

    li:hover {
      list-style-type: disc;
    }
  }
</style>

<section id="webb-sites">
  <h2>Webbsites &middot; Experiences I've built</h2>

  <ul>
    <li>
      {@html createLink({
        destination: "https://beachfront.digital",
        title: "Beachfront product page",
        wrappedText: "Beachfront"
      })}

      &middot;

      Domain name portfolio management. Kinda abandoned but still works.
    </li>

    <li>
      {@html createLink({
        destination: "https://chew.sh",
        title: "Chew product page",
        wrappedText: "Chew"
      })}

      &middot;

      Server-side analytics because we all use blockers.
    </li>

    <li>
      {@html createLink({
        destination: "https://chronver.org",
        title: "ChronVer homepage",
        wrappedText: "ChronVer"
      })}

      &middot;

      SemVer doesn't make sense in 20XX so I made ChronVer.
    </li>

    <li>
      {@html createLink({
        destination: "https://dsgn.agency",
        title: "dsgn. homepage",
        wrappedText: "dsgn."
      })}

      &middot;

      A design agency I made with Jesse Youngblood. Give us money and you'll be happy.
    </li>

    <li>
      {@html createLink({
        destination: "https://hikar.io",
        title: "hikari product page",
        wrappedText: "hikariOS"
      })}

      &middot;

      Splash page for my operating system. Why are you smirking?
    </li>

    <li>
      {@html createLink({
        destination: "https://inc.sh",
        title: "Ideas Never Cease homepage",
        wrappedText: "Ideas Never Cease"
      })}

      &middot;

      Parent company for my (obviously) endless ideas.
    </li>

    <li>
      {@html createLink({
        destination: "https://lefty.world",
        title: "Lefty World homepage",
        wrappedText: "Lefty World"
      })}

      &middot;

      Lefties, our time has come!
    </li>

    <li>
      {@html createLink({
        destination: "https://socii.network",
        title: "Socii homepage",
        wrappedText: "Socii"
      })}

      &middot;

      I'm building a social network. Stop laughing.
    </li>

    <li>
      {@html createLink({
        destination: "https://blog.webb.page",
        title: "My blog",
        wrappedText: "Webb Blog"
      })}

      &middot;

      I write from time to time.
    </li>

    <li>
      {@html createLink({
        destination: "/",
        title: "The Webb Page",
        wrappedText: "Webb Page"
      })}

      &middot;

      You're already here!
    </li>

    <!--/
    <li>
      <a href="" rel="noopener noreferrer" target="_blank" title="">Webb Resume</a>
      &middot;
      It would be really cool to have an interactive resume
    </li>
    /-->

    <li>
      {@html createLink({
        destination: "https://weom.space",
        title: "WEÖM homepage",
        wrappedText: "WEÖM"
      })}

      &middot;

      Wisdom Escapes Ordinary Minds...coming (back) soon
    </li>
  </ul>
</section>
