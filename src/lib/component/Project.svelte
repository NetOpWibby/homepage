<script lang="ts">
  //// var
  const videoRegex = /\.(mp4|mov|avi|wmv|flv|mkv|webm|m4v)$/i;

  const projects = [
    {
      content: "<p>This project was a proof-of-concept utilizing node-webkit (circa 2013) to see if it was possible to create a web browser.</p><p>Performance wasn't great but damn it looks good.</p>",
      id: "001",
      media: [
        "/images/projects/aries_01.jpg",
        "/images/projects/aries_02.jpg"
      ],
      tagline: "web browser",
      title: "Aries"
    },
    {
      content: `<p>This registrar was built upon the Handshake blockchain to sell domain names and provide hosting. I poured everything I've ever wanted in a registrar into this.</p><p>I've stopped working on it due to <a href="https://blog.neuenet.com/post/devlog-014" target="_blank">happenings I didn't agree with</a> happening in the Handshake community. I will come back to beachfront/ when I feel things are better or I <a href="https://dap.sh?ref=webb.page" target="_blank">fork Handshake</a>.</p>`,
      id: "002",
      media: [
        "/images/projects/beachfront_01.jpg",
        "/images/projects/beachfront_02.jpg"
      ],
      tagline: "next-generation registrar",
      title: "beachfront/"
    },
    {
      content: `<p>In 2019 I was sick of using SemVer so I made something better (for me). Check it out at <a href="https://chronver.org?ref=webb.page">chronver.org</a>!</p>`,
      id: "009",
      media: [
        "/images/projects/chronver.jpg"
      ],
      tagline: "chronologic/calendar-based versioning system",
      title: "ChronVer"
    },
    {
      content: "<p>In 2014 I had the idea for a &ldquo;responsive operating system&rdquo; that could run on any device from a Raspberry Pi to a desktop PC.</p><p>There's no reason why a neat OS GUI shouldn't look as good as anime interfaces.</p>",
      id: "003",
      media: [
        "/images/projects/hikari_01.mp4"
      ],
      tagline: "responsive operating system",
      title: "hikari"
    },
    {
      content: `<p>This registry was built upon the Handshake blockchain to provide infrastructure for my TLDs. I wrote a nameserver in Deno, created a DNSSEC tool to secure said TLDs, and so on. I built and blogged a <strong>lot</strong> about my vision for the internet and freely gave away ideas and a roadmap for others to adopt.</p><p>I've stopped working on it due to <a href="https://blog.neuenet.com/post/devlog-014" target="_blank">happenings I didn't agree with</a> happening in the Handshake community. I will come back to beachfront/ when I feel things are better or I <a href="https://dap.sh?ref=webb.page" target="_blank">fork Handshake</a>.</p>`,
      id: "004",
      media: [
        "/images/projects/neuenet_01.jpg",
        "/images/projects/neuenet_02.jpg"
      ],
      tagline: "registry for the Neue Internet",
      title: "Neuenet"
    },
    {
      content: `<p>I just want a place to upload my Fortnite clips and <del>fuck</del> <em>I'm not a fan of</em> Google. No other platform out there makes sense either so once again, I gotta build what I want to use.</p><p>This is just for me and my friends until the features are where I want them, at which point it'll be a paid service. Follow me on Mastodon if you want updates&hellip;my other networks get infrequent updates.</p><p>Check it out at <a href="https://nickel.video?ref=webb.page">nickel.video</a>!</p>`,
      id: "005",
      media: [
        "/images/projects/nickel_01.jpg"
      ],
      tagline: "short-form video platform",
      title: "Nickel"
    },
    {
      content: "<p>There's no point in competing with Google, they've got a 20 year headstart&hellip;but what if you could just ask someone who's knowledgeable af? You do realize Google only has data because of us. Right?</p><p>Anyhoo, there's a lot of parts to make this work and I'm busy with side quests at the moment.</p>",
      id: "006",
      media: [],
      tagline: "P2P search",
      title: "queree"
    },
    {
      content: `<p>Around 2017 or so I had the idea of a new kind of social network that brought back the great parts of Myspace while empowering people with comprehensive customization, data, and moderation tools. Bluesky does an excellent job with the latter but being VC-backed means it's only a matter of time before enshittification.</p><p><del>Work in progress.</del> Mastodon and Bluesky are good enough so I decided to stop working on this.</p>`,
      id: "007",
      media: [
        "/images/projects/socii_01.jpg"
      ],
      tagline: "the social network",
      title: "socii"
    },
    {
      content: `<p>After I learned about <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl?ref=webb.page" target="_blank">the OKLCH color space</a> and saw how much more vibrant colors were than HEX, I delved into creating the perfect color palette for me. I spent nearly a year copy/pasting my CSS variables in my projects until I decided to have a unified place for them.</p><p><em>For some reason</em> <a href="https://news.ycombinator.com/item?id=43072338?ref=webb.page" target="_blank">my post on HackerNews</a> about uchū got super popular, which was neat. 600+ points and 900+ Github stars is wild. A handful of weirdos got irate, which was&hellip;alarming. Maybe touch grass?</p><p>Check out the site at <a href="https://uchu.style?ref=webb.page" target="_blank">uchu.style</a>!</p>`,
      id: "008",
      media: [
        "/images/projects/uchu_01.jpg"
      ],
      tagline: "the color palette for internet lovers",
      title: "uchū"
    }
  ];

  let activeProject = "005";
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

    &::before {
      width: 1px; height: calc(100% + 0.75rem);
      top: -0.75rem; left: calc(var(--list-indentation) * -0.75);

      background-color: var(--color-border);
      content: "";
      position: absolute;
    }
  }

  :global(p) {
    line-height: var(--line-height);
    margin-bottom: 0;
    padding-top: calc(var(--padding) * 2);
    text-align: left;
    white-space: normal;
    width: 100%;

    :global(a) {
      text-decoration: underline var(--uchu-yin-2);
    }
  }

  figure {
    margin-bottom: 0;
  }

  video {
    padding-top: calc(var(--padding) * 2);
    width: 100%;
  }
</style>

<h2>projects.webb.page</h2>

<ul>
  {#each projects as project (project.id)}
    <li>
      <button
        class:active={activeProject === project.id}
        on:click={() => activeProject === project.id ? activeProject = "" : activeProject = project.id}>{project.title} &middot; {project.tagline}</button>

      {#if activeProject === project.id}
        <div class="player">
          {@html project.content}

          {#each project.media as mediaItem}
            {#if videoRegex.test(mediaItem)}
              <figure>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video controls>
                  <source src={mediaItem}/>
                </video>
              </figure>
            {:else}
              <figure>
                <img alt="" src={mediaItem}/>
                <figcaption></figcaption>
              </figure>
            {/if}
          {/each}
        </div>
      {/if}
    </li>
  {/each}
</ul>
