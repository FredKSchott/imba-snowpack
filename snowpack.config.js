const scripts = {
    "mount:public": "mount public --to .",
    "mount:web_modules": "mount web_modules",
    "mount:src": "mount src --to _dist_",
    "plugin:imba": "./plugin-imba/plugin.js"
};
module.exports = {
  scripts,
  knownEntrypoints: ["imba"]
}