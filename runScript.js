/**
 * import required modules
 */

const { debounce } = require("lodash");
const chalk = require("chalk");
const { spawn } = require("child_process");

/**
 * for running the script with parameters:
 * @params file
 */

const runScript = (file) => {
  console.log(chalk.blue.bgRed.bold(`EXECUTING ${file} `));
  spawn("node", [file], { stdio: "inherit" });
};

module.exports = runScript;
