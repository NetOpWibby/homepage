<script lang="ts">
  //// import
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  //// util
  import "./../../sass/global.scss";

  //// var
  const scrollControl = createScrollPreventer();

  //// function
  function horizontalScroll(event: WheelEvent): void {
    const target = (event.target as HTMLElement).closest("section");

    if (target && isVerticallyScrollable(target) && !isAtVerticalScrollLimit(target, event.deltaY) && isFullyInView(target))
      return; /// ignore vertically scrollable elements

    if (event.deltaY !== 0) {
      event.preventDefault();
      window.scrollBy({ left: event.deltaY });
    }
  }

  function isAtVerticalScrollLimit(element: HTMLElement, deltaY: number) {
    if (!element || !deltaY)
      return false;

    return (deltaY > 0 && Math.abs(element.scrollTop + element.clientHeight - element.scrollHeight) < 1) ||
      (deltaY < 0 && element.scrollTop <= 0);
  }

  function isFullyInView(element: HTMLElement) {
    if (!element)
      return false;

    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 24 && // 0
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isVerticallyScrollable(element: HTMLElement) {
    if (!element)
      return false;

    return element.scrollHeight > element.clientHeight;
  }

  function createScrollPreventer(): { prevent: () => void; allow: () => void } {
    return {
      prevent: () => {
        window.removeEventListener("wheel", horizontalScroll);
      },
      allow: () => {
        window.addEventListener("wheel", horizontalScroll, { passive: false });
      }
    };
  }

  /// ready
  onMount(() => {
    browser && scrollControl.allow();
  });
</script>

<style lang="scss">
  div {
    width: fit-content; height: 100%;

    display: flex;
    white-space: nowrap;
  }

  aside {
    width: 100%; height: calc(var(--line-height) * 2);
    bottom: 0; left: 0;

    align-items: center;
    display: flex;
    font-size: 0.8rem;
    margin: 0;
    padding-left: calc(var(--padding) * 3);
    position: fixed;
    text-transform: lowercase;

    > * {
      display: block;
      margin-right: calc(var(--padding) * 2);
      position: relative;
      user-select: none;

      &:not(:last-child) {
        &::after {
          content: "/";
          font-weight: normal;
          opacity: 0.15;
          position: absolute;
          right: calc(var(--padding) * -1.5);
        }
      }
    }

    em {
      white-space: nowrap;
    }

    .banner-wrapper {
      width: 100%;
    }

    img {
      image-rendering: pixelated;
    }
  }

  :global(a) {
    transition: none;

    &:hover {
      color: var(--uchu-yin-4);
      text-decoration: underline var(--uchu-yin-2);
    }
  }
</style>

<div>
  <slot></slot>
</div>

<aside>
  <strong>Contact</strong>
  <span>paul@webb.page</span>
  <!-- <a href="https://netopwibby.socii.network" target="_blank">socii@netopwibby</a> -->
  <a href="https://social.coop/@netopwibby" target="_blank">@netopwibby@social.coop</a>
  <a href="https://blacksky.community/profile/webb.page" target="_blank">@webb.page</a>
  <em>scroll vertically to scroll horizontally</em>
  <img alt="" src="/88x31/a.gif"/>
  <img alt="" src="/88x31/b.gif"/>
  <img alt="" src="/88x31/c.gif"/>
  <a class="banner-wrapper" href="https://ellesho.me/page/?ref=https://webb.page">
    <img alt="" src="/88x31/elle.webp"/>
  </a>
</aside>
