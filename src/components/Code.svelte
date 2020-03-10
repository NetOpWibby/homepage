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
      overflow-x: auto;
      overflow-y: hidden;
    }

    @media (max-width: 1330px) {
      border-bottom: 5px solid $inc-gray-3;
      grid-area: 3 / 1 / 4 / 6;
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
        destination: "https://code.webb.page/Webb/config-eslint",
        title: "Repo for @webb/config-eslint",
        wrappedText: "@webb/config-eslint"
      })}

      &middot;

       Opinionated ESLint configuration
    </li>

    <!--/
    <li>
      {@html createLink({
        destination: "https://code.webb.page/IdeasNeverCease/gotql",
        title: "Repo for @inc/gotql",
        wrappedText: "@inc/gotql"
      })}

      &middot;

      Write GraphQL queries as objects instead of strings
    </li>
    /-->

    <!--/
    <li>
      {@html createLink({
        destination: "https://code.webb.page/IdeasNeverCease/here",
        title: "Repo for @inc/here",
        wrappedText: "@inc/here"
      })}

      &middot;

      A dependency-free server for single page apps
    </li>
    /-->

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/config-prettier",
        title: "Repo for @webb/config-prettier",
        wrappedText: "@webb/config-prettier"
      })}

      &middot;

       Opinionated Prettier configuration
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/config-stylelint",
        title: "Repo for @webb/config-stylelint",
        wrappedText: "@webb/config-stylelint"
      })}

      &middot;

       Opinionated Stylelint configuration
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/console",
        title: "Repo for @webb/console",
        wrappedText: "@webb/console"
      })}

      &middot;

      Print console messages in STYLE
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/ensure-database",
        title: "Repo for @webb/ensure-database",
        wrappedText: "@webb/ensure-database"
      })}

      &middot;

      Ensure your RethinkDB database exists
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/ensure-table",
        title: "Repo for @webb/ensure-table",
        wrappedText: "@webb/ensure-table"
      })}

      &middot;

      Ensure your RethinkDB table exists
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/order-object",
        title: "Repo for @webb/order-object",
        wrappedText: "@webb/order-object"
      })}

      &middot;

      Ensure your Object keys are in order
    </li>

    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/test",
        title: "Repo for @webb/test",
        wrappedText: "@webb/test"
      })}

      &middot;

      Tiny, simple test runner
    </li>


    <li>
      {@html createLink({
        destination: "https://code.webb.page/Webb/validate-email",
        title: "Repo for @webb/validate-email",
        wrappedText: "@webb/validate-email"
      })}

      &middot;

      Pretty good email validation
    </li>

    <!--/
    <li>
      {@html createLink({
        destination: "https://code.webb.page/hikari/Aries",
        title: "Repo for Aries",
        wrappedText: "Aries"
      })}

      &middot;

      Browser for hikari
    </li>
    /-->

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
        destination: "https://code.webb.page/Webb/Homepage",
        title: "Repo for my homepage",
        wrappedText: "Homepage"
      })}

      &middot;

      The site you're currently on
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
