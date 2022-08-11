"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const format = require("./format.js");
function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    app.component(name, options);
    app.component(format.camelize(`-${name}`), options);
  };
  return options;
}
exports.withInstall = withInstall;
