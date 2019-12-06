"use strict";



//  I M P O R T S

import * as sapper from "@sapper/server";
import compression from "compression";
import polka from "polka";
import sirv from "sirv";



//  U T I L S

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";



//  P R O G R A M

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err)
      console.log("error", err);
  });
