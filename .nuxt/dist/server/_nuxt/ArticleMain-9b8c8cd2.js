import { defineComponent, mergeProps, useSSRContext } from "vue";
import "hookable";
import { u as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleMain",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "mb-4" }, _attrs))}><div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center"><div class="col-md-10 col-lg-8 col-xl-7"><div class="lh-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="d-flex justify-content-end mb-4"><span class="btn btn-primary text-uppercase">Back →</span></div></div></div></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ArticleMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ArticleMain-9b8c8cd2.js.map
