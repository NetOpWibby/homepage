<script lang="ts">
  //// var
  const protocolRegex = /^(https?:\/\/)(www\.)?/;
  const referrer = "?ref=webb.page";

  const friends = [
    {
      alias: "",
      name: "Anna Maria",
      urls: ["https://annamariaperez.com"]
    },
    {
      alias: "Astro✨Dim",
      name: "",
      urls: ["https://www.astrodim.com"]
    },
    {
      alias: "bias",
      name: "",
      urls: [
        "https://www.mendicantbias.xyz",
        "https://www.punk.energy",
        "https://www.punkstep.com"
      ]
    },
    {
      alias: "",
      name: "Brad Barrish",
      urls: ["https://bradbarrish.me"]
    },
    {
      alias: "",
      name: "Cassandra Heart",
      urls: ["https://quilibrium.com"]
    },
    {
      alias: "",
      name: "Cornelius Toole",
      urls: ["https://micro.corntoole.com"]
    },
    {
      alias: "",
      name: "David Yarde",
      urls: ["https://davidyarde.com"]
    },
    {
      alias: "",
      name: "Dewon Hall",
      urls: ["https://thatcreativeguy.com"]
    },
    {
      alias: "riotgoools",
      name: "elle",
      urls: [
        "https://ellesho.me/page",
        "https://riotgoools.com",
        "https://veryinter.net/person"
      ]
    },
    {
      alias: "",
      name: "EmmoLei Sankofa",
      urls: ["https://www.e-sankofa.com"]
    },
    {
      alias: "eskimo",
      name: "",
      urls: ["https://eskimo.software"]
    },
    {
      alias: "",
      name: "Iheanyi Ekechukwu",
      urls: ["https://iheanyi.com"]
    },
    {
      alias: "",
      name: "Jacky Alciné",
      urls: ["https://jacky.wtf"]
    },
    {
      alias: "",
      name: "Jamar Torres",
      urls: ["https://www.jamar.dev"]
    },
    {
      alias: "",
      name: "Jesse Youngblood",
      urls: ["https://jesseyoungblood.com"]
    },
    {
      alias: "",
      name: "Jonathon Toon",
      urls: ["https://jonathontoon.com"]
    },
    {
      alias: "",
      name: "Jordan Greene",
      urls: ["https://www.jordankgreen.com"]
    },
    {
      alias: "",
      name: "Josh Sender",
      urls: ["https://www.joshsender.com"]
    },
    {
      alias: "",
      name: "Justin Edmund",
      urls: ["https://www.jedmund.com"]
    },
    {
      alias: "",
      name: "Kathy Varela",
      urls: ["https://www.kathyvarela.com"]
    },
    {
      alias: "DJ Brisseaux",
      name: "Karl Brisseaux",
      urls: ["https://kbrissy.com"]
    },
    {
      alias: "brisseaux",
      name: "Kervin Brisseaux",
      urls: ["https://www.brisseaux.com"]
    },
    {
      alias: "",
      name: "Kumail Hunaid",
      urls: ["https://kumailht.com"]
    },
    {
      alias: "my wife",
      name: "Lakeisha Webb",
      urls: ["https://sincerelyshantelle.com"]
    },
    {
      alias: "",
      name: "Lauren Dorman",
      urls: ["https://laurendorman.io"]
    },
    {
      alias: "",
      name: "Matt Thomas",
      urls: ["https://insidae.com"]
    },
    {
      alias: "",
      name: "Maurice Cherry",
      urls: ["https://www.mauricecherry.com"]
    },
    {
      alias: "Fresh Daily",
      name: "Michael Richardson",
      urls: ["https://freshdaily.godaddysites.com"]
    },
    {
      alias: "",
      name: "Mike Toney",
      urls: ["https://miketoney.com"]
    },
    {
      alias: "",
      name: "Ollie Barker",
      urls: ["https://www.olliebarker.co.uk"]
    },
    {
      alias: "",
      name: "Rasmus Andersson",
      urls: ["https://rsms.me"]
    },
    {
      alias: "",
      name: "Reginé Gilbert",
      urls: ["https://reginegilbert.com"]
    },
    {
      alias: "",
      name: "Samantha",
      urls: ["https://humankind.place"]
    },
    {
      alias: "",
      name: "Sang Lee",
      urls: ["https://www.sanglee.me"]
    },
    {
      alias: "SegamanXero",
      name: "",
      urls: ["https://www.segamanxero.com"]
    },
    {
      alias: "",
      name: "Selena Rox",
      urls: ["https://selenarox.com"]
    },
    {
      alias: "",
      name: "Shomi Patwary",
      urls: ["https://www.illusivemedia.com"]
    },
    {
      alias: "Skunkie",
      name: "Tara",
      urls: ["https://punklabs.com"]
    },
    {
      alias: "pugson",
      name: "Wojtek Witkowski",
      urls: ["https://wojtek.im"]
    },
    {
      alias: "Z",
      name: "",
      urls: ["https://blacksocialists.us"]
    }
  ];

  //// function
  function processUrl(url: string) {
    const ancillaryParts = url.match(protocolRegex);

    if (!ancillaryParts)
      return url;

    const ancillaryPartsMatch = ancillaryParts[0];
    const restOfUrl = url.slice(ancillaryPartsMatch.length);

    return `<span class="special-char">${ancillaryPartsMatch}</span>${restOfUrl}`;
  }
</script>

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
    padding: 0 var(--list-indentation) calc(var(--list-indentation) * 4) 0;

    li {
      margin: 0; padding: 0 0 var(--baseline) calc(var(--baseline) * 2);

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

      &:not(:last-of-type) {
        &::after {
          height: 100%;
        }
      }
    }
  }

  :global(.special-char) {
    color: var(--inc-yin-3);
    letter-spacing: -0.05rem;
  }
</style>

<h2>ring.webb.page</h2>

<ul>
  {#each friends as friend}
    <li>
      {#if friend.name.length}
        {friend.name}
        {#if friend.alias}
          ({friend.alias})
        {/if}
      {:else}
        {friend.alias}
      {/if}

      <div>
        {#each friend.urls as url}
          <a href={url + referrer} target="_blank">{@html processUrl(url)}</a><br/>
        {/each}
      </div>
    </li>
  {/each}
</ul>
