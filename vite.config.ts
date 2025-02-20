


//// import

import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";



//// export

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
} satisfies UserConfig;
