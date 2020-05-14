const imba = require("../../web_modules/imba.js");
const fs = require("fs");

exports.build = async function build(fileLoc) {
  const result = await imba.transformFileAsync(fileLoc, {
    cwd: process.cwd(),
  });
  return { result: result.code };
};