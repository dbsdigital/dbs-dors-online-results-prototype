const fs = require("node:fs");
const path = require("node:path");

const cms = {};

for (const file of fs.readdirSync(__dirname)) {
  if (path.extname(file) === ".json") {
    cms[path.basename(file, ".json")] = require(path.join(__dirname, file));
  }
}

module.exports = cms;
