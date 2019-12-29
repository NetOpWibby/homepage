<script>
  import { createLink } from "~util";
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    padding: 1.75rem 1.5rem;

    @media (min-width: 1331px) {
      grid-area: 1 / 4 / 4 / 6;
    }

    @media (max-width: 1330px) {
      grid-area: 4 / 1 / 5 / 6;
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
    column-width: 150px;
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

<section id="webb-ring">
  <h2>Webbring &middot; Friends &amp; acquaintances I find interesting</h2>

  <ul>
    <li>
      {@html createLink({
        destination: "http://analisesmith.com",
        title: "Analise's homepage",
        wrappedText: "Analise Smith"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://annamariacoppi.com",
        title: "Anna's homepage",
        wrappedText: "Anna Maria Coppi"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.arickacl.com",
        title: "Aricka's homepage",
        wrappedText: "Aricka Lewis"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://massarrest.bandcamp.com",
        title: "Boo's music",
        wrappedText: "Boo Boo Howse"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://soundcloud.com/dubk617",
        title: "Brandon's Soundcloud",
        wrappedText: "Brandon Cook"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://thatsbr.com",
        title: "Brigid's homepage",
        wrappedText: "Brigid Ryan"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://conchan.cc",
        title: "Constance's homepage",
        wrappedText: "Constance Chan"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://micro.corntoole.com",
        title: "Cornelius' blog",
        wrappedText: "Cornelius Toole"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://corygibbons.com",
        title: "Cory's homepage",
        wrappedText: "Cory Gibbons"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://twitch.tv/tsm_daequan",
        title: "Daequan's Twitch channel",
        wrappedText: "Daequan"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://davidyarde.com",
        title: "David's homepage",
        wrappedText: "David Yarde"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://thatcreativeguy.com",
        title: "Dewon's portfolio",
        wrappedText: "Dewon Hall"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.astrodim.space",
        title: "Dimmi's homepage",
        wrappedText: "Dimmi Bolling"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://frnsys.com",
        title: "Francis' homepage",
        wrappedText: "Francis Tseng"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://freshdaily.bandcamp.com",
        title: "Fresh Daily's Bandcamp",
        wrappedText: "Fresh Daily"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://gabrielmtn.github.io",
        title: "Gabriel's homepage",
        wrappedText: "Gabriel Martin"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://geoffreychong.com",
        title: "Geoffrey's homepage",
        wrappedText: "Geoffrey Chong"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://pizza-cat.blogspot.com",
        title: "Hugh's blog",
        wrappedText: "Hugh Freeman"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://iheanyi.com",
        title: "Iheanyi's homepage",
        wrappedText: "Iheanyi Ekechukwu"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://jackielaryea.com",
        title: "Jacklyn's homepage",
        wrappedText: "Jacklyn Laryea"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://jacky.wtf",
        title: "Jacky's homepage",
        wrappedText: "Jacky Alcine"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.jamar.dev",
        title: "Jamar's homepage",
        wrappedText: "Jamar Torres"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://jesseyoungblood.com",
        title: "Jesse's homepage",
        wrappedText: "Jesse Youngblood"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://jessicasmolinski.com",
        title: "Jessica's homepage",
        wrappedText: "Jessica Smolinski"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://jonathontoon.com",
        title: "Jonathon's homepage",
        wrappedText: "Jonathon Toon"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://www.smaragdine.net",
        title: "Jordan's homepage",
        wrappedText: "Jordan Green"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://joshsender.com",
        title: "Josh's portfolio",
        wrappedText: "Josh Sender"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.jedmund.com",
        title: "Justin's homepage",
        wrappedText: "Justin Edmund"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.kbrissy.com",
        title: "Karl's homepage",
        wrappedText: "Karl Brisseaux"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://kathyvarela.com",
        title: "Kathy's homepage",
        wrappedText: "Kathy Varela"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://brisseaux.com",
        title: "Kervin's homepage",
        wrappedText: "Kervin Brisseaux"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://kevindaum.org",
        title: "Kevin's homepage",
        wrappedText: "Kevin Daum"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://kevonticer.com",
        title: "KeVon's homepage",
        wrappedText: "KeVon Ticer"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.madebybourn.com",
        title: "Kim's homepage",
        wrappedText: "Kim Goulbourne"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.luvnaturals.com",
        title: "Kim's homepage",
        wrappedText: "Kim Love"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://korut.tumblr.com",
        title: "Korut's blog",
        wrappedText: "Korut"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://kumailht.com",
        title: "Kumail's homepage",
        wrappedText: "Kumail Hunaid"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://sincerelyshantelle.com",
        title: "Lakeisha's homepage",
        wrappedText: "Lakeisha Webb"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://laurendorman.io",
        title: "Lauren's homepage",
        wrappedText: "Lauren Dorman"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://cmdshiftdesign.com",
        title: "Liz's homepage",
        wrappedText: "Liz Andrade"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://loganfaerberdesign.com",
        title: "Logan's homepage",
        wrappedText: "Logan Faerber"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://www.spyroteknik.com",
        title: "Martin's homepage",
        wrappedText: "Martin Bland"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.isajeep.com",
        title: "Martin's homepage",
        wrappedText: "Marvin Perry"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://insidae.com",
        title: "Matt's homepage",
        wrappedText: "Matt Thomas"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://mauricecherry.com",
        title: "Maurice's homepage",
        wrappedText: "Maurice Cherry"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://www.kickstarter.com/projects/miketoney/black-anime-lost-chill-dren-of-the-diaspora",
        title: "Micheal's Kickstarter",
        wrappedText: "Michael Toney"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://smirapdesigns.com",
        title: "Mike's homepage",
        wrappedText: "Mike Karolos"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://nathaniel.daught.me",
        title: "Nathaniel's homepage",
        wrappedText: "Nathaniel Daught"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://segamanxero.com",
        title: "Oliver's homepage",
        wrappedText: "Oliver Narrangansett"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://olliebarker.co.uk",
        title: "Ollie's homepage",
        wrappedText: "Ollie Barker"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://rsms.me",
        title: "Rasmus' homepage",
        wrappedText: "Rasmus Andersson"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://reginegilbert.com",
        title: "Regine's homepage",
        wrappedText: "Regine Gilbert"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://beautylynk.com",
        title: "Rica's startup",
        wrappedText: "Rica Elysee"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://betterlegends.com",
        title: "Sam's homepage",
        wrappedText: "Sam Mameli"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://www.sanglee.me",
        title: "Sang's homepage",
        wrappedText: "Sang Lee"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://selenarox.com",
        title: "Serena's homepage",
        wrappedText: "Serena Rox"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "http://www.illusivemedia.com",
        title: "Shomi's portfolio",
        wrappedText: "Shomi Patwary"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://punklabs.com",
        title: "Tara's homepage",
        wrappedText: "Tara"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://mcwolf.bandcamp.com",
        title: "Wellington's Bandcamp",
        wrappedText: "Wellington Netto"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://wojtek.im",
        title: "Wojtek's homepage",
        wrappedText: "Wojtek Witkowski"
      })}
    </li>

    <li>
      {@html createLink({
        destination: "https://blacksocialists.us",
        title: "Z's homepage",
        wrappedText: "Z"
      })}
    </li>
  </ul>
</section>
