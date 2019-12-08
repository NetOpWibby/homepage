<script>
  import { createLink } from "~util";
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    padding: 1.75rem 1.5rem;

    @media (min-width: 1331px) {
      border-top: 5px solid $inc-gray-3;
      grid-area: 4 / 3 / 6 / 6;
    }

    @media (max-width: 1330px) {
      border-bottom: 5px solid $inc-gray-3;
    }

    @media(prefers-color-scheme: dark) {
      border-color: $inc-gray-7;
    }
  }

  h2 {
    font-weight: 800;
    margin-bottom: 1rem;
  }

  ul {
    column-gap: 3rem;
    column-rule: 1px solid $inc-gray-3;
    column-width: 350px;
    font-size: 1rem;
    line-height: 1.55;
    list-style-type: circle;
    padding-left: 0.25rem;
    width: 100%;

    @media (min-width: 1331px) {
      column-fill: auto;
      height: calc(100% - 0.5rem);
      padding-bottom: 2rem;
    }

    @media(prefers-color-scheme: dark) {
      column-rule: 1px solid $inc-gray-7;
    }

    li:hover {
      list-style-type: disc;
    }
  }
</style>

<section id="webb-code">
  <h2>Code &middot; Open-source things I'm not (totally) ashamed to share</h2>

  <ul>
    <li>
      {@html createLink({
        destination: "https://code.webb.page/IdeasNeverCease/eslint-config",
        title: "Repo for @inc/eslint-config",
        wrappedText: "@inc/eslint-config"
      })}

      &middot;

      ESLint configuration for !NC projects
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/IdeasNeverCease/gotql",
        title: "Repo for @inc/gotql",
        wrappedText: "@inc/gotql"
      })}

      &middot;

      Write GraphQL queries as objects instead of strings
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/IdeasNeverCease/here",
        title: "Repo for @inc/here",
        wrappedText: "@inc/here"
      })}

      &middot;

      A dependency-free server for single page apps
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/IdeasNeverCease/stylelint-config",
        title: "Repo for @inc/stylelint-config",
        wrappedText: "@inc/stylelint-config"
      })}

      &middot;

      Stylelint configuration for !NC projects
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/hikari/Aries",
        title: "Repo for Aries",
        wrappedText: "Aries"
      })}

      &middot;

      Browser for hikari
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/Blog",
        title: "Repo for my blog",
        wrappedText: "Blog"
      })}

      &middot;

      My personal blog
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/ChronVer/chronver",
        title: "Repo for chronver",
        wrappedText: "chronver"
      })}

      &middot;

      The chronological versioner
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/ChronVer/chronver-regex",
        title: "Repo for chronver-regex",
        wrappedText: "chronver-regex"
      })}

      &middot;

      Regular expression for matching chronver versions
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/ChronVer/chronver.org",
        title: "Repo for chronver.org",
        wrappedText: "chronver.org"
      })}

      &middot;

      Chronologic Versioning spec and website
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/Homepage",
        title: "Repo for my homepage",
        wrappedText: "Homepage"
      })}

      &middot;

      The site you're currently on
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/ChronVer/spec",
        title: "Repo for chronver's spec",
        wrappedText: "spec"
      })}

      &middot;

      Chronologic Versioning Specification
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/sveltiest",
        title: "Repo for Sveltiest",
        wrappedText: "Sveltiest"
      })}

      &middot;

      Sublime Text Syntax highlighting for Svelte 3 components.
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/vne",
        title: "Repo for vne",
        wrappedText: "vne"
      })}

      &middot;

      A clever .env
    </li>
  </ul>
</section>
