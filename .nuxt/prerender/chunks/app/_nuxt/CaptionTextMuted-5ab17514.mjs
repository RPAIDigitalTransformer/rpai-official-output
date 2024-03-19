import { useSSRContext, mergeProps } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "caption text-muted" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/CaptionTextMuted.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CaptionTextMuted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CaptionTextMuted as default };
//# sourceMappingURL=CaptionTextMuted-5ab17514.mjs.map
