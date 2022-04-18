


///  N A T I V E

import { resolve } from "path";

///  I M P O R T

import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

///  U T I L

const currentDirectory = process.cwd();

// console.log("\n>>> currentDirectory");
// console.log(resolve(currentDirectory, "package.json"));

/** @type {import("@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      // entryPoint: "./src/server.ts",
      out: "build"
    }),
    // base: resolve(currentDirectory, "src"),
    files: {
      assets: "static",
      routes: "src/route",
      // serviceWorker: "src/service-worker",
      template: "src/index.html"
    },
    // target: "body",
    vite: () => ({
      // optimizeDeps: {
      //   exclude: [
      //     "svelte-kit-cookie-session"
      //   ],
      //   include: [
      //     "lodash.escaperegexp"
      //     // "@urql/svelte"
      //   ]
      // },
      resolve: {
        alias: {
          "~component": resolve(currentDirectory, "src", "component"),
          // "~icon": resolve(currentDirectory, "src", "icon"),
          "~package": resolve(currentDirectory, "package.json"),
          // "~query": resolve(currentDirectory, "src", "query"),
          "~util": resolve(currentDirectory, "src", "utility")
        }
      },
      server: {
        fs: {
          allow: [
            resolve(currentDirectory, "package.json")
            // resolve(currentDirectory, "sass", "uchu", "_root.scss")
          ]
        }
      }
      // ssr: {
      //   // noExternal: ["svelte-stripe-js"]
      // }
    })
  },
  preprocess: preprocess(
    /// https://github.com/sveltejs/svelte-preprocess
  )
};



///  E X P O R T

export default config;
