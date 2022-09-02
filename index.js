#!/usr/bin/env node

/**
 * import required modules
 */

const prog = require("caporal");
const watch = require("./watch");

prog
  .version("1.0.0")
  .argument("[filename]", "JavaScript file you want to run")
  .action(watch);

prog.parse(process.argv);
