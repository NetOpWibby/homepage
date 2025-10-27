<script lang="ts">
</script>

<style lang="scss">
  h2 {
    margin: 0 0 calc(var(--padding)* 2); padding: var(--padding) calc(var(--padding) * 2);

    background-color: var(--color-border);
    color: var(--uchu-yin-7);
    font-size: 1rem;
    line-height: inherit;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  ul {
    line-height: 1;
    margin-bottom: 0;
    margin-left: calc(var(--list-indentation) / 2);
    padding: 0 var(--list-indentation) 0.25rem 0;

    li {
      margin: 0; padding: 0 0 calc(var(--baseline) / 2) calc(var(--baseline) * 2);

      line-height: var(--line-height);
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
        top: calc(var(--list-indentation) / 2.5);
      }

      &::after {
        width: 1px; height: var(--list-indentation);
        top: calc(var(--list-indentation) * -0.6);
      }

      code {
        line-height: inherit;
        white-space: nowrap;
      }
    }
  }

  p {
    margin: 0; padding: 0 var(--about-padding) var(--about-padding);
    white-space: break-spaces;
  }
</style>

<h2>support.webb.page</h2>

<ul>
  <li>Bitcoin: <code>bc1q7znsdk9eudlctcmhlel3d9vmxz4vmgedndx5qn</code></li>
  <li>Cardano: <code>addr1q89wumdmfsjn9hsk57cw2g4wwyv2uz5g97c6pyxux03vpylju9njft3tr69mheqh5k3wh3d5h9f88hkecn4h6h2jll5sdncex7</code></li>
  <li>Ethereum: <code>0x9c94aafF71e4A58Cd9fb5bE2005b8Dc952C4c2e3</code></li>
  <li>Solana: <code>DbJ7peGAyrNNH8J1yJ82S7ZnK3BJenefjVQtGLM9pMny</code></li>
  <li>Tezos: <code>tz1UVwR1MhqfytRbypB1jeFbFKTLu4LSFE9A</code></li>
</ul>

<p>I have a number of domains for sale. Past projects never embarked on but names I don’t want to let expire just yet; <a href="https://dsgn.io">dsgn.io</a>, <a href="https://hackerspace.wtf">hackerspace.wtf</a>, <a href="https://imagination.industries">imagination.industries</a>, and <a href="https://phoenix.systems">phoenix.systems</a>.</p>
