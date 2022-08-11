import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
const _hoisted_1 = { class: "ant-button" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WjlButton",
  props: {
    type: { default: "primary" },
    size: { default: "normal" },
    msg: { default: "\u6309\u94AE" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", _hoisted_1, toDisplayString(__props.msg), 1);
    };
  }
});
export {
  _sfc_main as default
};
