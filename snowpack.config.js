const scripts = {
    "mount:public": "mount public --to .",
    "mount:web_modules": "mount web_modules",
    "mount:src": "mount src --to _dist_",
    "plugin:imba": "imba/rollup"
};
module.exports = {
  scripts,
  knownEntrypoints: ["imba"]
}