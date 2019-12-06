<script>
  export let segment;
  let showNavigation = false;

  function closeNavigation() {
    showNavigation = false;
  }

  function toggleNavigation() {
    if (showNavigation)
      showNavigation = false;
    else
      showNavigation = true;
  }
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  .navigation {
    display: flex;
    min-width: 150px;
    text-align: right;
    width: 150px;

    @media (min-width: 601px) {
      flex-direction: column;
      padding-bottom: 1rem;
      position: relative;
    }

    @media (max-width: 600px) {
      bottom: 1rem; left: 1rem;

      flex-direction: column-reverse;
      overflow: hidden;
      position: fixed;
      z-index: 10;

      &:not(.active) {
        height: 50px;

        &::after {
          bottom: -2px;
        }
      }

      &.active {
        background-color: $inc-gray-1;
        box-shadow: 0 0 1rem 0 rgba($inc-gray-9, 0.5);
        padding-top: 1rem;
        padding-bottom: 4rem;

        &::after {
          bottom: 0;
        }
      }
    }

    &::after {
      content: "";
      left: 0;

      @media (min-width: 601px) {
        width: 149px; height: 6.5rem;

        background-color: $inc-gray-1;
        position: fixed;
        top: 0;
      }

      @media (max-width: 600px) {
        width: 100%; height: 100%;

        border: 1px solid $inc-gray-3;
        position: absolute;
        z-index: -1;
      }
    }
  }

  .navigation__item {
    display: block;

    &:not(.logo):not(.menu) {
      color: $inc-gray-6;
      padding: 0.25rem 1rem;
    }

    &:not(.logo) {
      font-size: 0.8rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: $inc-blue-5;
      }

      &.selected {
        color: $inc-gray-9;
        pointer-events: none;
      }
    }

    &.logo {
      @include hide-text;
      background-image: url("../logo.svg");
      background-position: center right;
      background-repeat: no-repeat;
      height: 5rem;
      z-index: 1;

      @media (min-width: 601px) {
        border-right: 1px solid $inc-gray-3;
        margin-bottom: 2.2rem;
        position: sticky;
        top: 1rem;
      }

      &::after {
        width: 100%; height: 1px;
        bottom: -0.5rem; left: 0;

        background-color: $inc-gray-3;
        content: "";
        position: absolute;

        @media (max-width: 600px) {
          display: none;
        }
      }
    }

    &.menu {
      @media (min-width: 601px) {
        display: none;
      }

      @media (max-width: 600px) {
        bottom: 0; left: 0;

        background-color: $inc-black;
        color: $inc-gray-1;
        cursor: pointer;
        padding: 1rem;
        position: absolute;
        text-align: inherit;
        width: 100%;
        z-index: 1;
      }
    }
  }

  .navigation__slider {
    width: 1px; height: 0;
    top: 0; left: 149px;

    background-color: $inc-gray-9;
    position: absolute;
    transition: top 0.2s;
    z-index: 1;

    @media (max-width: 600px) {
      display: none;
    }
  }
</style>

<nav class="navigation" class:active={showNavigation === true}>
  <a
    class="{segment === undefined ? 'navigation__item logo selected' : 'navigation__item logo'}"
    href="."
    on:click={closeNavigation}
    title="Back to Lefty homepage"
  >Home</a>

  <a
    class="{segment === 'about' ? 'navigation__item selected' : 'navigation__item'}"
    href="about"
    on:click={closeNavigation}
    title="About Lefty"
  >About</a>

  <a
    class="{segment === 'blog' ? 'navigation__item selected' : 'navigation__item'}"
    href="blog"
    on:click={closeNavigation}
    rel=prefetch
    title="Latest updates and ponderings about the Lefty experience"
  >Blog</a>

<!--   <a
    class="{segment === 'manifesto' ? 'navigation__item selected' : 'navigation__item'}"
    href="manifesto"
    on:click={closeNavigation}
    title="Why Lefty exists"
  >Manifesto</a> -->

  <a
    class="{segment === 'frequently-asked-questions' ? 'navigation__item selected' : 'navigation__item'}"
    href="frequently-asked-questions"
    on:click={closeNavigation}
    title="Who have questions? We have answers!"
  >FAQ</a>

<!--   <a
    class="{segment === 'memes' ? 'navigation__item selected' : 'navigation__item'}"
    href="memes"
    on:click={closeNavigation}
    title="Connect with other lefties with classic humor"
  >Memes</a> -->

  <a
    class="{segment === 'profiles' ? 'navigation__item selected' : 'navigation__item'}"
    href="profiles"
    on:click={closeNavigation}
    title="Interviews with neat lefties"
  >Profiles</a>

<!--   <a
    class="{segment === 'shop' ? 'navigation__item selected' : 'navigation__item'}"
    href="shop"
    on:click={closeNavigation}
    title="Help keep this site running by purchasing something. Please."
  >Shop</a> -->

  <button
    class="navigation__item menu"
    on:click={toggleNavigation}
    title="Toggle menu"
  >Menu</button>

  <div id="navigation-slider" class="navigation__slider"/>
</nav>
