<script lang="ts"></script>

<style lang="scss">
  h2, ul {
    line-height: 1;
  }

  h2 {
    margin: 0 0 calc(var(--padding)* 2); padding: var(--padding) calc(var(--padding) * 2);

    background-color: var(--color-border);
    color: var(--inc-yin-7);
    font-size: 1rem;
    line-height: inherit;
  }

  ul {
    margin-left: calc(var(--list-indentation) / 2);
    padding: 0 var(--list-indentation) 0.25rem 0;

    li {
      margin: 0; padding: 0 0 var(--baseline) calc(var(--baseline) * 2);
      position: relative;

      &::before,
      &::after {
        background-color: var(--color-border);
        content: "";
        left: 0;
        position: absolute;
      }

      &::before {
        width: calc(var(--list-indentation) / 2); height: 1px;
        top: calc(var(--list-indentation) / 4);
      }

      &::after {
        width: 1px; height: var(--list-indentation);
        top: calc(var(--list-indentation) * -0.75);
      }
    }
  }
</style>

<h2>promo.webb.page</h2>

<ul>
  <li>
    <a href="https://www.eyebuydirect.com/referral/5217807">EyeBuyDirect (prescription eyewear)</a>
  </li>

  <li>
    <a href="https://lnk.rise-ai.com/68SlyIVHzDVybhw">Moment (iPhone photography/videography tools)</a>
  </li>
</ul>
