<script lang="ts"></script>

<style lang="scss">
  section {
    align-items: center;
    display: flex;
    justify-content: center;

    @media (min-width: 1331px) {
      border-right: 5px solid var(--inc-gray-3);
      grid-area: 3 / 3 / 4 / 4;
    }

    @media (max-width: 1330px) {
      bottom: -4rem; right: -6rem;

      height: 250px;
      position: fixed;
      transform: rotate(-20deg);
    }

    @media(prefers-color-scheme: dark) {
      border-color: var(--inc-gray-7);
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
