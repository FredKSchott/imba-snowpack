const imba = require("../web_modules/imba.js");
const fs = require("fs");

exports.build = function build(fileLoc) {
  const fileSource = fs.readFileSync(fileLoc, { encoding: "utf-8" });
  const result = imba.mount(fileSource);
  return { result: result.js.code };
};