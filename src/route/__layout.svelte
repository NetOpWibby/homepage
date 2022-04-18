<script lang="ts"></script>

<style lang="scss" global>
  @import "sass/utilities/mixins";

  :root {
    --mono-font: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
    --sans-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-size: 16px;

    // Gray ─────────────────────────────────

    --inc-gray-0: #f8f9fa;
    --inc-gray-1: #f1f3f5;
    --inc-gray-2: #e9ecef;
    --inc-gray-3: #dee2e6;
    --inc-gray-4: #ced4da;
    --inc-gray-5: #adb5bd;
    --inc-gray-6: #868e96;
    --inc-gray-7: #495057;
    --inc-gray-8: #343a40;
    --inc-gray-9: #212529;

    --inc-gray-0-rgb: 248, 249, 250;
    --inc-gray-1-rgb: 241, 243, 245;
    --inc-gray-2-rgb: 233, 236, 239;
    --inc-gray-3-rgb: 222, 226, 230;
    --inc-gray-4-rgb: 206, 212, 218;
    --inc-gray-5-rgb: 173, 181, 189;
    --inc-gray-6-rgb: 134, 142, 150;
    --inc-gray-7-rgb: 73, 80, 87;
    --inc-gray-8-rgb: 52, 58, 64;
    --inc-gray-9-rgb: 33, 37, 41;

    /*  Red
     *  ─────────────────────────────────── */

    --inc-red-0: #fff5f5;
    --inc-red-1: #ffe3e3;
    --inc-red-2: #ffc9c9;
    --inc-red-3: #ffa8a8;
    --inc-red-4: #ff8787;
    --inc-red-5: #ff6b6b;
    --inc-red-6: #fa5252;
    --inc-red-7: #f03e3e;
    --inc-red-8: #e03131;
    --inc-red-9: #c92a2a;

    --inc-red-0-rgb: 255, 245, 245;
    --inc-red-1-rgb: 255, 227, 227;
    --inc-red-2-rgb: 255, 201, 201;
    --inc-red-3-rgb: 255, 168, 168;
    --inc-red-4-rgb: 255, 135, 135;
    --inc-red-5-rgb: 255, 107, 107;
    --inc-red-6-rgb: 250, 82, 82;
    --inc-red-7-rgb: 240, 62, 62;
    --inc-red-8-rgb: 224, 49, 49;
    --inc-red-9-rgb: 201, 42, 42;

    /*  Pink
     *  ─────────────────────────────────── */

    --inc-pink-0: #fff0f6;
    --inc-pink-1: #ffdeeb;
    --inc-pink-2: #fcc2d7;
    --inc-pink-3: #faa2c1;
    --inc-pink-4: #f783ac;
    --inc-pink-5: #f06595;
    --inc-pink-6: #e64980;
    --inc-pink-7: #d6336c;
    --inc-pink-8: #c2255c;
    --inc-pink-9: #a61e4d;

    --inc-pink-0-rgb: 255, 240, 246;
    --inc-pink-1-rgb: 255, 222, 235;
    --inc-pink-2-rgb: 252, 194, 215;
    --inc-pink-3-rgb: 250, 162, 193;
    --inc-pink-4-rgb: 247, 131, 172;
    --inc-pink-5-rgb: 240, 101, 149;
    --inc-pink-6-rgb: 230, 73, 128;
    --inc-pink-7-rgb: 214, 51, 108;
    --inc-pink-8-rgb: 194, 37, 92;
    --inc-pink-9-rgb: 166, 30, 77;

    /*  Grape
     *  ─────────────────────────────────── */

    --inc-grape-0: #f8f0fc;
    --inc-grape-1: #f3d9fa;
    --inc-grape-2: #eebefa;
    --inc-grape-3: #e599f7;
    --inc-grape-4: #da77f2;
    --inc-grape-5: #cc5de8;
    --inc-grape-6: #be4bdb;
    --inc-grape-7: #ae3ec9;
    --inc-grape-8: #9c36b5;
    --inc-grape-9: #862e9c;

    --inc-grape-0-rgb: 248, 240, 252;
    --inc-grape-1-rgb: 243, 217, 250;
    --inc-grape-2-rgb: 238, 190, 250;
    --inc-grape-3-rgb: 229, 153, 247;
    --inc-grape-4-rgb: 218, 119, 242;
    --inc-grape-5-rgb: 204, 93, 232;
    --inc-grape-6-rgb: 190, 75, 219;
    --inc-grape-7-rgb: 174, 62, 201;
    --inc-grape-8-rgb: 156, 54, 181;
    --inc-grape-9-rgb: 134, 46, 156;

    /*  Violet
     *  ─────────────────────────────────── */

    --inc-violet-0: #f3f0ff;
    --inc-violet-1: #e5dbff;
    --inc-violet-2: #d0bfff;
    --inc-violet-3: #b197fc;
    --inc-violet-4: #9775fa;
    --inc-violet-5: #845ef7;
    --inc-violet-6: #7950f2;
    --inc-violet-7: #7048e8;
    --inc-violet-8: #6741d9;
    --inc-violet-9: #5f3dc4;

    --inc-violet-0-rgb: 243, 240, 255;
    --inc-violet-1-rgb: 229, 219, 255;
    --inc-violet-2-rgb: 208, 191, 255;
    --inc-violet-3-rgb: 177, 151, 252;
    --inc-violet-4-rgb: 151, 117, 250;
    --inc-violet-5-rgb: 132, 94, 247;
    --inc-violet-6-rgb: 121, 80, 242;
    --inc-violet-7-rgb: 112, 72, 232;
    --inc-violet-8-rgb: 103, 65, 217;
    --inc-violet-9-rgb: 95, 61, 196;

    /*  Indigo
     *  ─────────────────────────────────── */

    --inc-indigo-0: #edf2ff;
    --inc-indigo-1: #dbe4ff;
    --inc-indigo-2: #bac8ff;
    --inc-indigo-3: #91a7ff;
    --inc-indigo-4: #748ffc;
    --inc-indigo-5: #5c7cfa;
    --inc-indigo-6: #4c6ef5;
    --inc-indigo-7: #4263eb;
    --inc-indigo-8: #3b5bdb;
    --inc-indigo-9: #364fc7;

    --inc-indigo-0-rgb: 237, 242, 255;
    --inc-indigo-1-rgb: 219, 228, 255;
    --inc-indigo-2-rgb: 186, 200, 255;
    --inc-indigo-3-rgb: 145, 167, 255;
    --inc-indigo-4-rgb: 116, 143, 252;
    --inc-indigo-5-rgb: 92, 124, 250;
    --inc-indigo-6-rgb: 76, 110, 245;
    --inc-indigo-7-rgb: 66, 99, 235;
    --inc-indigo-8-rgb: 59, 91, 219;
    --inc-indigo-9-rgb: 54, 79, 199;

    /*  Blue
     *  ─────────────────────────────────── */

    --inc-blue-0: #e7f5ff;
    --inc-blue-1: #d0ebff;
    --inc-blue-2: #a5d8ff;
    --inc-blue-3: #74c0fc;
    --inc-blue-4: #4dabf7;
    --inc-blue-5: #339af0;
    --inc-blue-6: #228be6;
    --inc-blue-7: #1c7ed6;
    --inc-blue-8: #1971c2;
    --inc-blue-9: #1864ab;

    --inc-blue-0-rgb: 231, 245, 255;
    --inc-blue-1-rgb: 208, 235, 255;
    --inc-blue-2-rgb: 165, 216, 255;
    --inc-blue-3-rgb: 116, 192, 252;
    --inc-blue-4-rgb: 77, 171, 247;
    --inc-blue-5-rgb: 51, 154, 240;
    --inc-blue-6-rgb: 34, 139, 230;
    --inc-blue-7-rgb: 28, 126, 214;
    --inc-blue-8-rgb: 25, 113, 194;
    --inc-blue-9-rgb: 24, 100, 171;

    /*  Cyan
     *  ─────────────────────────────────── */

    --inc-cyan-0: #e3fafc;
    --inc-cyan-1: #c5f6fa;
    --inc-cyan-2: #99e9f2;
    --inc-cyan-3: #66d9e8;
    --inc-cyan-4: #3bc9db;
    --inc-cyan-5: #22b8cf;
    --inc-cyan-6: #15aabf;
    --inc-cyan-7: #1098ad;
    --inc-cyan-8: #0c8599;
    --inc-cyan-9: #0b7285;

    --inc-cyan-0-rgb: 227, 250, 252;
    --inc-cyan-1-rgb: 197, 246, 250;
    --inc-cyan-2-rgb: 153, 233, 242;
    --inc-cyan-3-rgb: 102, 217, 232;
    --inc-cyan-4-rgb: 59, 201, 219;
    --inc-cyan-5-rgb: 34, 184, 207;
    --inc-cyan-6-rgb: 21, 170, 191;
    --inc-cyan-7-rgb: 16, 152, 173;
    --inc-cyan-8-rgb: 12, 133, 153;
    --inc-cyan-9-rgb: 11, 114, 133;

    /*  Teal
     *  ─────────────────────────────────── */

    --inc-teal-0: #e6fcf5;
    --inc-teal-1: #c3fae8;
    --inc-teal-2: #96f2d7;
    --inc-teal-3: #63e6be;
    --inc-teal-4: #38d9a9;
    --inc-teal-5: #20c997;
    --inc-teal-6: #12b886;
    --inc-teal-7: #0ca678;
    --inc-teal-8: #099268;
    --inc-teal-9: #087f5b;

    --inc-teal-0-rgb: 230, 252, 245;
    --inc-teal-1-rgb: 195, 250, 232;
    --inc-teal-2-rgb: 150, 242, 215;
    --inc-teal-3-rgb: 99, 230, 190;
    --inc-teal-4-rgb: 56, 217, 169;
    --inc-teal-5-rgb: 32, 201, 151;
    --inc-teal-6-rgb: 18, 184, 134;
    --inc-teal-7-rgb: 12, 166, 120;
    --inc-teal-8-rgb: 9, 146, 104;
    --inc-teal-9-rgb: 8, 127, 91;

    /*  Green
     *  ─────────────────────────────────── */

    --inc-green-0: #ebfbee;
    --inc-green-1: #d3f9d8;
    --inc-green-2: #b2f2bb;
    --inc-green-3: #8ce99a;
    --inc-green-4: #69db7c;
    --inc-green-5: #51cf66;
    --inc-green-6: #40c057;
    --inc-green-7: #37b24d;
    --inc-green-8: #2f9e44;
    --inc-green-9: #2b8a3e;

    --inc-green-0-rgb: 235, 251, 238;
    --inc-green-1-rgb: 211, 249, 216;
    --inc-green-2-rgb: 178, 242, 187;
    --inc-green-3-rgb: 140, 233, 154;
    --inc-green-4-rgb: 105, 219, 124;
    --inc-green-5-rgb: 81, 207, 102;
    --inc-green-6-rgb: 64, 192, 87;
    --inc-green-7-rgb: 55, 178, 77;
    --inc-green-8-rgb: 47, 158, 68;
    --inc-green-9-rgb: 43, 138, 62;

    /*  Lime
     *  ─────────────────────────────────── */

    --inc-lime-0: #f4fce3;
    --inc-lime-1: #e9fac8;
    --inc-lime-2: #d8f5a2;
    --inc-lime-3: #c0eb75;
    --inc-lime-4: #a9e34b;
    --inc-lime-5: #94d82d;
    --inc-lime-6: #82c91e;
    --inc-lime-7: #74b816;
    --inc-lime-8: #66a80f;
    --inc-lime-9: #5c940d;

    --inc-lime-0-rgb: 244, 252, 227;
    --inc-lime-1-rgb: 233, 250, 200;
    --inc-lime-2-rgb: 216, 245, 162;
    --inc-lime-3-rgb: 192, 235, 117;
    --inc-lime-4-rgb: 169, 227, 75;
    --inc-lime-5-rgb: 148, 216, 45;
    --inc-lime-6-rgb: 130, 201, 30;
    --inc-lime-7-rgb: 116, 184, 22;
    --inc-lime-8-rgb: 102, 168, 15;
    --inc-lime-9-rgb: 92, 148, 13;

    /*  Yellow
     *  ─────────────────────────────────── */

    --inc-yellow-0: #fff9db;
    --inc-yellow-1: #fff3bf;
    --inc-yellow-2: #ffec99;
    --inc-yellow-3: #ffe066;
    --inc-yellow-4: #ffd43b;
    --inc-yellow-5: #fcc419;
    --inc-yellow-6: #fab005;
    --inc-yellow-7: #f59f00;
    --inc-yellow-8: #f08c00;
    --inc-yellow-9: #e67700;

    --inc-yellow-0-rgb: 255, 249, 219;
    --inc-yellow-1-rgb: 255, 243, 191;
    --inc-yellow-2-rgb: 255, 236, 153;
    --inc-yellow-3-rgb: 255, 224, 102;
    --inc-yellow-4-rgb: 255, 212, 59;
    --inc-yellow-5-rgb: 252, 196, 25;
    --inc-yellow-6-rgb: 250, 176, 5;
    --inc-yellow-7-rgb: 245, 159, 0;
    --inc-yellow-8-rgb: 240, 140, 0;
    --inc-yellow-9-rgb: 230, 119, 0;

    /*  Orange
     *  ─────────────────────────────────── */

    --inc-orange-0: #fff4e6;
    --inc-orange-1: #ffe8cc;
    --inc-orange-2: #ffd8a8;
    --inc-orange-3: #ffc078;
    --inc-orange-4: #ffa94d;
    --inc-orange-5: #ff922b;
    --inc-orange-6: #fd7e14;
    --inc-orange-7: #f76707;
    --inc-orange-8: #e8590c;
    --inc-orange-9: #d9480f;

    --inc-orange-0-rgb: 255, 244, 230;
    --inc-orange-1-rgb: 255, 232, 204;
    --inc-orange-2-rgb: 255, 216, 168;
    --inc-orange-3-rgb: 255, 192, 120;
    --inc-orange-4-rgb: 255, 169, 77;
    --inc-orange-5-rgb: 255, 146, 43;
    --inc-orange-6-rgb: 253, 126, 20;
    --inc-orange-7-rgb: 247, 103, 7;
    --inc-orange-8-rgb: 232, 89, 12;
    --inc-orange-9-rgb: 217, 72, 15;

    /*  General
     *  ─────────────────────────────────── */

    --background-color: var(--inc-gray-1);
    --foreground-color: var(--inc-gray-9);

    @media (prefers-color-scheme: dark) {
      --background-color: var(--inc-gray-9);
      --foreground-color: var(--inc-gray-1);
    }

    --inc-white: #fff;
    --inc-black: #000;

    --inc-white-rgb: 255, 255, 255;
    --inc-black-rgb: 0, 0, 0;


    --font-size: 16px;
    --h2-size: 1.25rem;
  }

  html,
  body {
    width: 100%; height: 100%;
  }

  html {
    background-color: var(--inc-gray-1);
    background-repeat: repeat;
    background-size: 24px;

    @media(prefers-color-scheme: dark) {
      background-color: var(--inc-gray-8);
    }
  }

  body {
    min-width: 320px; min-height: 700px;

    color: var(--inc-gray-8);
    display: grid;
    font-family: var(--sans-font);
    font-size: var(--font-size);
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    padding: inherit;
    padding-right: env(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
    position: relative;
    z-index: 0;

    @media (min-width: 1331px) {
      overflow: hidden;
    }

    @media(prefers-color-scheme: dark) {
      color: var(--inc-gray-2);
    }
  }

  h2 {
    font-weight: 800;
    line-height: var(--line-height);
    margin-bottom: 1rem;
  }

  p,
  ul {
    line-height: 1.55;
  }

  ul {
    list-style-type: circle;
    padding-left: 0.25rem;
    width: 100%;

    @media (min-width: 1331px) {
      height: calc(100% - 0.5rem);
      padding-bottom: 2rem;
    }

    li {
      margin-bottom: auto;

      &:hover {
        list-style-type: disc;
      }
    }
  }

  section {
    padding: 1.5rem;
  }

  code {
    font-family: var(--mono-font);
    font-weight: 600;
  }

  a {
    color: var(--inc-blue-4);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #6667ab; // Pantone 2022 Color of the Year
    }

    @media(prefers-color-scheme: dark) {
      color: var(--inc-yellow-6);

      &:hover {
        color: var(--inc-yellow-9);
      }
    }
  }
</style>

<svelte:head>
  <meta property="og:site_name" content="The Webb Page"/>
</svelte:head>

<slot></slot>
