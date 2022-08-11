"use strict";
const vue = require("vue");
const _hoisted_1 = { class: "ant-button" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "WjlButton",
  props: {
    type: { default: "primary" },
    size: { default: "normal" },
    msg: { default: "\u6309\u94AE" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", _hoisted_1, vue.toDisplayString(__props.msg), 1);
    };
  }
});
module.exports = _sfc_main;
