<script lang="ts">
  //// var
  const bandcamp = [
    {
      by: "ViRiX Dreamcore, DV-i",
      id: "3230467359",
      title: "UPLINK - CROSSNIQ+ Original Sound",
      type: "album"
    },
    {
      by: "Pizza Hotline",
      id: "2804828422",
      title: "Polygon Island",
      type: "album"
    },
    {
      by: "leon chang",
      id: "3685680305",
      title: "re​:​treat",
      type: "album"
    },
    {
      by: "Sebdoom",
      id: "640549190",
      title: "Cyberpunk 2077 Fanmade Soundtrack",
      type: "album"
    },
    {
      by: "Teebs",
      id: "1931742968",
      title: "Ardour",
      type: "album"
    },
    {
      by: "Kamasi Washington",
      id: "3603991383",
      title: "The Epic",
      type: "album"
    },
    {
      by: "Thundercat",
      id: "3794237863",
      title: "Drunk",
      type: "album"
    },
    {
      by: "TEEEL",
      id: "1898404266",
      title: "Overtime",
      type: "album"
    },
    {
      by: "MACROSS 82-99",
      id: "2376445182",
      title: "It's Own Way [​マ​ク​ロ​ス​MACROSS 82​-​99 Remix]",
      type: "single"
    },
    {
      by: "LAKIM",
      id: "635810172",
      title: "mi_amigos_",
      type: "single"
    },
    {
      by: "LAKIM",
      id: "1488235027",
      title: "the dash",
      type: "single"
    },
    {
      by: "LAKIM",
      id: "2759787857",
      title: "20 Steps",
      type: "single"
    },
    {
      by: "LAKIM",
      id: "3667963750",
      title: "Forward March",
      type: "single"
    },
    {
      by: "Alexander Brandon",
      id: "953490707",
      title: "Space Noir (Original Game Soundtrack)",
      type: "album"
    },
    {
      by: "Funk Fiction",
      id: "4237561960",
      title: "Sonic BeATS",
      type: "album"
    },
    {
      by: "Introverted Dancefloor",
      id: "751538854",
      title: "When I'm Lonely",
      type: "album"
    },
    {
      by: "C418",
      id: "1349219244",
      title: "Minecraft - Volume Alpha",
      type: "album"
    },
    {
      by: "Cyberpunk 2077",
      id: "1773399509",
      title: "Cyberpunk 2077: Radio, Vol. 1 (Original Soundtrack)",
      type: "album"
    },
    {
      by: "Cyberpunk 2077",
      id: "1870167199",
      title: "Cyberpunk 2077: Radio, Vol. 2 (Original Soundtrack)",
      type: "album"
    },
    {
      by: "Cyberpunk 2077",
      id: "4182307863",
      title: "Cyberpunk 2077: Radio, Vol. 3 (Original Soundtrack)",
      type: "album"
    },
    {
      by: "Cyberpunk 2077",
      id: "3624438326",
      title: "Cyberpunk 2077: Radio, Vol. 4 (Original Soundtrack)",
      type: "album"
    },

    {
      by: "Danny Scott Lane",
      id: "422810680",
      title: "Shower",
      type: "album"
    },
    {
      by: "Danny Scott Lane",
      id: "1584151539",
      title: "Home Decor",
      type: "album"
    },
    {
      by: "ALFAXYSM",
      id: "803715127",
      title: "CRYSTALLOMANIA (Ver. 1​.​0)",
      type: "album"
    },
    {
      by: "ALFAXYSM",
      id: "4001491411",
      title: "i​-​port",
      type: "album"
    },
    {
      by: "Limousine",
      id: "2493506758",
      title: "Skymall",
      type: "album"
    },
    {
      by: "nuphory",
      id: "3332776732",
      title: "ditherdream1",
      type: "album"
    },
    {
      by: "AFTA-1",
      id: "3211763084",
      title: "Silica_01",
      type: "track"
    },
    {
      by: "AFTA-1",
      id: "692190634",
      title: "103120",
      type: "album"
    },
    {
      by: "bo en",
      id: "1387178982",
      title: "pale machine 10 year anniversary re​-​master",
      type: "album"
    },
    {
      by: "Mndsgn.",
      id: "3524388493",
      title: "Snaxxx",
      type: "album"
    },
    {
      by: "Zai Kowen",
      id: "1537466475",
      title: "Ocean View",
      type: "album"
    },
    {
      by: "Jungle Fatigue Kru",
      id: "3478474368",
      title: "Jungle Fatigue Vol. 3",
      type: "album"
    },
    {
      by: "DEVIL KILLER",
      id: "3479413388",
      title: "Pick A Fucking Car",
      type: "album"
    },
    {
      by: "Pizza Hotline",
      id: "71750021",
      title: "DELIVERY BOY 2099 // 配​達​少​年​2099",
      type: "album"
    },
    {
      by: "Pizza Hotline",
      id: "483965118",
      title: "Pressing Business",
      type: "album"
    },
    {
      by: "nuphory & Pizza Hotline",
      id: "1120176299",
      title: "startup tune feat. nuphory",
      type: "track"
    },
    {
      by: "Pizza Hotline",
      id: "2629563639",
      title: "LEVEL SELECT",
      type: "album"
    },
    {
      by: "Alice Auer",
      id: "2689738227",
      title: "Baby, Cry EP",
      type: "album"
    },
    {
      by: "DV-i",
      id: "435475786",
      title: "Perpetual",
      type: "track"
    },
  ];

  let activeRelease: string;
</script>

<style lang="scss">
  h2 {
    margin: 0 0 calc(var(--padding) * 2); padding: var(--padding) calc(var(--padding) * 2);

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
    padding: 0 var(--list-indentation) calc(var(--list-indentation) * 4) 0;

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

      button {
        cursor: pointer;
        position: relative;

        &.active {
          padding-left: calc(var(--baseline) * 2);

          &::before {
            width: calc(var(--list-indentation) * 1.25); height: 1px;
            top: 50%; left: calc(calc(var(--baseline) * 2) * -1);

            background-color: var(--color-border);
            content: "";
            position: absolute;
          }
        }
      }
    }
  }

  .player {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    iframe {
      max-width: 700px;
      width: 100%;
    }

    &::before {
      width: 1px; height: calc(100% + 0.75rem);
      top: -0.75rem; left: calc(var(--list-indentation) * -0.75);

      background-color: var(--color-border);
      content: "";
      position: absolute;
    }
  }
</style>

<h2>music.webb.page/bandcamp</h2>

<ul>
  {#each bandcamp as release (release.id)}
    <li>
      <button
        class:active={activeRelease === release.id}
        on:click={() => activeRelease === release.id ? activeRelease = "" : activeRelease = release.id}>{release.title} by {release.by}</button>

      {#if activeRelease === release.id}
        <div class="player">
          <img alt={release.title + " art"} src={"/images/bandcamp/" + release.id + ".jpg"}/>
          <!-- svelte-ignore a11y-missing-attribute -->
          {#if release.type === "album"}
            <iframe style="height: 300px;" src="https://bandcamp.com/EmbeddedPlayer/album={release.id}/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/" seamless></iframe>
          {:else}
            <iframe style="height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track={release.id}/size=small/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/" seamless></iframe>
          {/if}
        </div>
      {/if}
    </li>
  {/each}
</ul>
