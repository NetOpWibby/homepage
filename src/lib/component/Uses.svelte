<script lang="ts">
  //// var
  const referrer = "?ref=webb.page";

  const products = [
    {
      comment: "why the hell would I remember a password?",
      name: "1Password",
      url: "https://1password.com"
    },
    {
      comment: "Terminal emulator",
      name: "Alacritty",
      url: "https://alacritty.org"
    },
    {
      comment: "when songs aren’t on Bandcamp",
      name: "Apple Music",
      url: "https://music.apple.com"
    },
    {
      comment: "default browser",
      name: "Arc",
      url: "https://arc.net"
    },
    {
      comment: "because not having a backup hurts",
      name: "Backblaze",
      url: "https://www.backblaze.com"
    },
    {
      comment: "better than ChatGPT",
      name: "Claude",
      url: "https://claude.ai"
    },
    {
      comment: "the best database on the planet",
      name: "Gel",
      url: "https://www.geldata.com"
    },
    {
      comment: "Terminal emulator with tab support",
      name: "Ghostty",
      url: "https://ghostty.org"
    },
    {
      comment: "best search engine after Neeva sold out",
      name: "Kagi",
      url: "https://kagi.com"
    },
    {
      comment: "taking notes on the go",
      name: "Lumen",
      url: "https://uselumen.com"
    },
    {
      comment: "one day I’ll graduate to hosting my own IMAP software instead",
      name: "Mail-in-a-Box",
      url: "https://mailinabox.email"
    },
    {
      comment: "RSS is alive and well",
      name: "NetNewsWire",
      url: "https://netnewswire.com"
    },
    {
      comment: "when Safari is being dumb",
      name: "Orion",
      url: "https://kagi.com/orion"
    },
    {
      comment: "taking notes at my computer",
      name: "Obsidian",
      url: "https://obsidian.md"
    },
    {
      comment: "code editor",
      name: "Sublime Text",
      url: "https://www.sublimetext.com"
    },
  ];
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

    a {
      text-decoration: underline var(--uchu-yin-2);

      span {
        padding-left: 0.2rem;
        position: relative;
        text-decoration: underline var(--uchu-gray-2);
      }
    }
  }
</style>

<h2>uses.webb.page</h2>

<ul>
  {#each products as product}
    <li>
      <a href={product.url + referrer}>{product.name}<span> ({product.comment})</span></a>
    </li>
  {/each}
</ul>
