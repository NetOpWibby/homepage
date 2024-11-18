


//// import

import adapter from "svelte-adapter-bun";
import preprocess from "svelte-preprocess";



//// export

/** @type {import("@sveltejs/kit").Config} */
export default {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: "warn"
    }
  },
  preprocess: [preprocess()]
};
