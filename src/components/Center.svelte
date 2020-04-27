<script></script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    align-items: center;
    display: flex;
    justify-content: center;

    @media (min-width: 1331px) {
      border-right: 5px solid $inc-gray-3;
      grid-area: 3 / 3 / 4 / 4;
    }

    @media (max-width: 1330px) {
      bottom: -4rem; right: -6rem;

      height: 250px;
      position: fixed;
      transform: rotate(-20deg);
    }

    @media(prefers-color-scheme: dark) {
      border-color: $inc-gray-7;
    }
  }

  img {
    width: 100%; height: 100%;
    max-width: 250px; max-height: 250px;

    object-fit: contain;
    position: relative;
  }
</style>

<section>
  <img alt="Me, as an emoji" src="/memoji.png"/>
</section>
