<script>
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    border-top: 5px solid $inc-gray-3;
    grid-area: 4 / 3 / 6 / 6;
    padding: 1.75rem 1.5rem;
  }

  h2 {
    font-weight: 800;
    margin-bottom: 1rem;
  }

  ul {
    width: 100%; height: calc(100% - 0.5rem);

    column-fill: auto;
    column-gap: 3rem;
    column-rule: 1px solid $inc-gray-3;
    column-width: 350px;
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
  <h2>Code &middot; Open-source code I'm not ashamed to share</h2>

  <ul>
    <li>
      <a href="https://code.webb.page/IdeasNeverCease/eslint-config" title="">@inc/eslint-config</a>
      &middot;
      ESLint configuration for !NC projects
    </li>

    <li>
      <a href="https://code.webb.page/IdeasNeverCease/gotql" title="">@inc/gotql</a>
      &middot;
      Write GraphQL queries as objects instead of strings
    </li>

    <li>
      <a href="https://code.webb.page/IdeasNeverCease/here" title="">@inc/here</a>
      &middot;
      A dependency-free server for single page apps
    </li>

    <li>
      <a href="https://code.webb.page/IdeasNeverCease/stylelint-config" title="">@inc/stylelint-config</a>
      &middot;
      Stylelint configuration for !NC projects
    </li>

    <li>
      <a href="https://code.webb.page/hikari/Aries" title="">Aries</a>
      &middot;
      Browser for hikari
    </li>

    <li>
      <a href="https://code.webb.page/Webb/Blog" title="">Blog</a>
      &middot;
      My personal blog
    </li>

    <li>
      <a href="https://code.webb.page/ChronVer/chronver" title="">chronver</a>
      &middot;
      The chronological versioner
    </li>

    <li>
      <a href="https://code.webb.page/ChronVer/chronver-regex" title="">chronver-regex</a>
      &middot;
      Regular expression for matching chronver versions
    </li>

    <li>
      <a href="https://code.webb.page/ChronVer/chronver.org" title="">chronver.org</a>
      &middot;
      Chronologic Versioning spec and website
    </li>

    <li>
      <a href="https://code.webb.page/ChronVer/spec" title="">spec</a>
      &middot;
      Chronologic Versioning Specification
    </li>

    <li>
      <a href="https://code.webb.page/sveltiest" title="">sveltiest</a>
      &middot;
      Sublime Text Syntax highlighting for Svelte 3 components.
    </li>

    <li>
      <a href="https://code.webb.page/vne" title="">vne</a>
      &middot;
      A clever <code>.env</code>
    </li>
  </ul>
</section>
