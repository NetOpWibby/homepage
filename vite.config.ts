


//// import

import { sveltekit } from "@sveltejs/kit/vite";



//// export

/** @type {import("vite").UserConfig} */
export default {
  json: {
    namedExports: true
  },
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        "package.json",
        "sass"
      ]
    }
  }
};
