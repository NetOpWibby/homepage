"use strict";



//  I M P O R T S

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import config from "sapper/config/rollup.js";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import sass from "sass";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import { terser } from "rollup-plugin-terser";

//  U T I L S

import pkg from "./package.json";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const preprocess = sveltePreprocess({
  scss: {
    style: ({ content, attributes }) => {
      if (attributes.type !== "text/scss")
        return;

      return new Promise((resolve, reject) => {
        sass.render({
          data: content,
          includePaths: [
            "sass",
            "src"
          ],
          sourceMap: true,
          outFile: "x" // this is necessary, but is ignored
        }, (err, result) => {
          if (err)
            return reject(err);

          resolve({
            code: result.css.toString(),
            map: result.map.toString()
          });
        });
      });
    }
  }
});

const dedupe = importee => importee === "svelte" || importee.startsWith("svelte/");
const onwarn = (warning, onwarn) => (warning.code === "CIRCULAR_DEPENDENCY" && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);



//  E X P O R T

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        preprocess,
        dev,
        hydratable: true,
        emitCss: true
      }),
      resolve({
        browser: true,
        dedupe
      }),
      commonjs(),
      legacy && babel({
        extensions: [
          ".js",
          ".mjs",
          ".html",
          ".svelte"
        ],
        runtimeHelpers: true,
        exclude: [
          "node_modules/@babel/**"
        ],
        presets: [
          ["@babel/preset-env", {
            targets: "> 0.25%, not dead"
          }]
        ],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          ["@babel/plugin-transform-runtime", {
            useESModules: true
          }]
        ]
      }),
      !dev && terser({
        module: true
      })
    ],
    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        preprocess,
        generate: "ssr",
        dev
      }),
      resolve({
        dedupe
      }),
      commonjs()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules
    ),
    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],
    onwarn
  }
};
