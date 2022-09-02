/**
 * import required modules
 */

const chokidar = require("chokidar");
const runScript = require("./runScript");
const fs = require("fs");
const fsPromises = fs.promises;

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
    .on("add", runScript)
    .on("change", runScript)
    .on("unlink", runScript);
};
module.exports = watch;
