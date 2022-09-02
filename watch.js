/**
 * import required modules
 */

const chokidar = require("chokidar");
const runScript = require("./runScript");
const fs = require("fs");
const { debounce } = require("lodash");
const fsPromises = fs.promises;

const start = debounce(runScript, 100);
/**
 * Callback function for prog
 * @param filename
 */

const watch = async ({ filename }) => {
  const name = filename || "index.js";
  try {
    await fsPromises.access(name);
  } catch (err) {
    throw new Error(`Could not find the file: ${name}`);
  }
  chokidar
    .watch(filename)
    .on("add", start)
    .on("change", start)
    .on("unlink", start);
};
module.exports = watch;
