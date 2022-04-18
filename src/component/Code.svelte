<script lang="ts">
  import { createLink } from "~util";
</script>

<style lang="scss">
  section {
    @media (min-width: 1331px) {
      border-top: 5px solid var(--inc-gray-3);
      grid-area: 4 / 3 / 6 / 6;
      overflow-x: auto;
      overflow-y: hidden;
    }

    @media (max-width: 1330px) {
      border-bottom: 5px solid var(--inc-gray-3);
      grid-area: 3 / 1 / 4 / 6;
    }

    @media(prefers-color-scheme: dark) {
      border-color: var(--inc-gray-7);
    }
  }

  ul {
    column-gap: 3rem;
    column-rule: 1px solid var(--inc-gray-3);
    column-width: 350px;

    @media (min-width: 1331px) {
      column-fill: auto;
    }

    @media(prefers-color-scheme: dark) {
      column-rule: 1px solid var(--inc-gray-7);
    }
  }
</style>

<section id="webb-code">
  <h2>Code &middot; Open-source things I'm not (totally) ashamed to share</h2>

  <ul>
    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/config-eslint",
        title: "Repo for @webb/config-eslint",
        wrappedText: "@webb/config-eslint"
      })}

      &middot;

       Opinionated ESLint configuration
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/config-prettier",
        title: "Repo for @webb/config-prettier",
        wrappedText: "@webb/config-prettier"
      })}

      &middot;

       Opinionated Prettier configuration
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/config-stylelint",
        title: "Repo for @webb/config-stylelint",
        wrappedText: "@webb/config-stylelint"
      })}

      &middot;

       Opinionated Stylelint configuration
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/console",
        title: "Repo for @webb/console",
        wrappedText: "@webb/console"
      })}

      &middot;

      Print console messages in STYLE
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/ensure-database",
        title: "Repo for @webb/ensure-database",
        wrappedText: "@webb/ensure-database"
      })}

      &middot;

      Ensure your RethinkDB database exists
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/ensure-table",
        title: "Repo for @webb/ensure-table",
        wrappedText: "@webb/ensure-table"
      })}

      &middot;

      Ensure your RethinkDB table exists
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/order-object",
        title: "Repo for @webb/order-object",
        wrappedText: "@webb/order-object"
      })}

      &middot;

      Ensure your Object keys are in order
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/stringify-object",
        title: "Repo for @webb/stringify-object",
        wrappedText: "@webb/stringify-object"
      })}

      &middot;

      Format objects the way you want
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/test",
        title: "Repo for @webb/test",
        wrappedText: "@webb/test"
      })}

      &middot;

      Tiny, simple test runner
    </li>


    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/validate-email",
        title: "Repo for @webb/validate-email",
        wrappedText: "@webb/validate-email"
      })}

      &middot;

      Pretty good email validation
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/blog",
        title: "Repo for my blog",
        wrappedText: "Blog"
      })}

      &middot;

      My personal blog
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/homepage",
        title: "Repo for my homepage",
        wrappedText: "Homepage"
      })}

      &middot;

      The site you're currently on
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/ChronVer/chronver",
        title: "Repo for chronver",
        wrappedText: "chronver"
      })}

      &middot;

      The chronological versioner
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/ChronVer/regex",
        title: "Repo for @chronver/regex",
        wrappedText: "@chronver/regex"
      })}

      &middot;

      Regular expression for matching chronver versions
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/ChronVer/homepage",
        title: "Repo for chronver.org",
        wrappedText: "chronver.org"
      })}

      &middot;

      Chronologic Versioning spec and website
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/ChronVer/spec",
        title: "Repo for chronver's spec",
        wrappedText: "spec"
      })}

      &middot;

      Chronologic Versioning Specification
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/sveltiest",
        title: "Repo for Sveltiest",
        wrappedText: "Sveltiest"
      })}

      &middot;

      Sublime Text Syntax highlighting for Svelte 3 components.
    </li>

    <li>
      {@html createLink({
        destination: "https://github.com/NetOpWibby/vne",
        title: "Repo for vne",
        wrappedText: "vne"
      })}

      &middot;

      A clever .env
    </li>
  </ul>
</section>
