import { b as buildAssetsURL } from '../../renderer.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { mdiChevronRight } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/@mdi/js/commonjs/mdi.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/h3/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/devalue/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ofetch/dist/node.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/destr/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/hookable/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/scule/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/klona/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/defu/dist/defu.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ohash/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ufo/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/drivers/fs.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/radix3/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/crosspath/dist/esm/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/image-size/dist/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/debounce/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/drivers/github.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unist-util-visit/index.js';
import 'node:fs';
import 'node:url';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/pathe/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/nodemailer/lib/nodemailer.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/@dword-design/functions/dist/find-index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/@dword-design/functions/dist/omit.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unified/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/mdast-util-to-string/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unist-util-stringify-position/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-character/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-chunked/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-resolve-all/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/slugify/slugify.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-parse/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-rehype/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-mdc/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/hast-util-to-string/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/github-slugger/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/detab/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-emoji/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-gfm/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-external-links/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-sort-attribute-values/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-sort-attributes/index.js';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-raw/index.js';

const _imports_0 = "" + buildAssetsURL("Business Plan-amico.b593602c.svg");
const _imports_1 = "" + buildAssetsURL("Social strategy-amico.56cab27d.svg");
const _imports_2 = "" + buildAssetsURL("Take Away-amico.f942001b.svg");
const _imports_3 = "" + buildAssetsURL("Collaboration-amico.a6191a3d.svg");
const _imports_4 = "" + buildAssetsURL("article-bg.a8576d38.jpg");
const _imports_5 = "" + buildAssetsURL("Designer girl-amico.b56ce843.svg");
const _imports_6 = "" + buildAssetsURL("At work-amico.d933d43f.svg");
const _imports_7 = "" + buildAssetsURL("Working-amico.da169cdd.svg");
const _imports_8 = "" + buildAssetsURL("Code typing-amico.055deb4d.svg");
const types = {
  mdi: {
    size: 24,
    viewbox: "0 0 24 24"
  },
  "simple-icons": {
    size: 24,
    viewbox: "0 0 24 24"
  },
  default: {
    size: 0,
    viewbox: "0 0 0 0"
  }
};
const _sfc_main$1 = {
  name: "icon",
  props: {
    type: String,
    path: { type: String, required: true },
    size: { type: [String, Number], default: 24 },
    viewbox: String,
    flip: {
      type: String,
      validator: (value) => ["horizontal", "vertical", "both", "none"].includes(value)
    },
    rotate: { type: Number, default: 0 }
  },
  computed: {
    styles() {
      return {
        "--sx": ["both", "horizontal"].includes(this.flip) ? "-1" : "1",
        "--sy": ["both", "vertical"].includes(this.flip) ? "-1" : "1",
        "--r": isNaN(this.rotate) ? this.rotate : this.rotate + "deg"
      };
    },
    defaults() {
      return types[this.type] || types.default;
    },
    sizeValue() {
      return this.size || this.defaults.size;
    },
    viewboxValue() {
      return this.viewbox || this.defaults.viewbox;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $options.sizeValue,
    height: $options.sizeValue,
    viewBox: $options.viewboxValue,
    style: $options.styles
  }, _attrs))} data-v-76aa6b74><path${ssrRenderAttr("d", $props.path)} data-v-76aa6b74></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@jamescoyle/vue-icon/lib/svg-icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-76aa6b74"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showUserGroup1 = ref(false);
    const showUserGroup2 = ref(false);
    const showUserGroup3 = ref(false);
    const showUserGroup4 = ref(false);
    const ourServices = ref([
      {
        title: "\u670D\u52D9\u6848\u4F8B",
        text: "\u8B93\u6211\u5011\u5354\u52A9\u4F60\u68B3\u7406\u73FE\u6709\u4F5C\u696D\u6D41\u7A0B\uFF0C\u6316\u6398\u554F\u984C\u6240\u5728\uFF0C\u4E26\u9032\u884C\u6D41\u7A0B\u512A\u5316\u518D\u8A2D\u8A08\uFF0C\u70BA\u4F60\u7684\u5DE5\u4F5C\u5275\u9020\u66F4\u591A\u50F9\u503C\uFF01"
      },
      {
        title: "\u5C08\u984C\u6587\u7AE0",
        text: "\u8B93\u6211\u5011\u5354\u52A9\u4F60\u68B3\u7406\u73FE\u6709\u4F5C\u696D\u6D41\u7A0B\uFF0C\u6316\u6398\u554F\u984C\u6240\u5728\uFF0C\u4E26\u9032\u884C\u6D41\u7A0B\u512A\u5316\u518D\u8A2D\u8A08\uFF0C\u70BA\u4F60\u7684\u5DE5\u4F5C\u5275\u9020\u66F4\u591A\u50F9\u503C\uFF01"
      },
      {
        title: "\u7DDA\u4E0A\u8AB2\u7A0B",
        text: "\u8B93\u6211\u5011\u5354\u52A9\u4F60\u68B3\u7406\u73FE\u6709\u4F5C\u696D\u6D41\u7A0B\uFF0C\u6316\u6398\u554F\u984C\u6240\u5728\uFF0C\u4E26\u9032\u884C\u6D41\u7A0B\u512A\u5316\u518D\u8A2D\u8A08\uFF0C\u70BA\u4F60\u7684\u5DE5\u4F5C\u5275\u9020\u66F4\u591A\u50F9\u503C\uFF01"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container g-5" }, _attrs))}><div class="row justify-content-center align-items-center" style="${ssrRenderStyle({ "margin-top": "5rem", "margin-bottom": "10rem" })}"><div class="col-6 pe-5"><img${ssrRenderAttr("src", _imports_0)}></div><div class="col-6 ps-5"><h3 class="mb-5">About Us</h3><p style="${ssrRenderStyle({ "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" })}"> \u6211\u5011\u662F\u4EE5\u300C\u6A5F\u5668\u4EBA\u6D41\u7A0B\u81EA\u52D5\u5316\uFF08RPA\uFF09\u300D\uFF0C\u7D50\u5408\u300C\u4EBA\u5DE5\u667A\u6167\uFF08AI\uFF09\u300D\u70BA\u4E3B\u984C\u7684\u4E2D\u6587\u5B78\u7FD2\u793E\u7FA4\uFF0C\u65E8\u5728\u5206\u4EAB RPA + AI \u7684\u5B78\u7FD2\u8CC7\u6E90\u3001\u61C9\u7528\u5BE6\u4F8B\u548C\u6700\u65B0\u767C\u5C55\u8DA8\u52E2\uFF0C\u8B93\u5DE5\u4F5C\u8005\u900F\u904E\u81EA\u52D5\u5316\u5DE5\u5177\u7684\u6709\u6548\u61C9\u7528\uFF0C\u5275\u9020\u6578\u4F4D\u512A\u5316\u8207\u8F49\u578B\u5951\u6A5F\u3002 </p></div></div><div class="row justify-content-center" style="${ssrRenderStyle({ "margin-bottom": "10rem" })}"><div class="col text-center"><h3 class="mb-5">What is RPA ?</h3><p style="${ssrRenderStyle({ "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" })}"> \u4E00\u500B\u6D3B\u5728\u4F60\u96FB\u8166\u684C\u9762\u4EE5\u53CA\u4E0D\u540C\u61C9\u7528\u7A0B\u5F0F\u4E4B\u9593\uFF0C24\u5C0F\u6642\u4E0D\u4F11\u606F\u7684\u300C\u8CC7\u8A0A\u53CA\u6578\u64DA\u300D\u642C\u904B\u5DE5 </p><div class="row row-cols-3"><div class="col"><img class="mb-3"${ssrRenderAttr("src", _imports_1)}><h4>\u6E96\u78BA\u7387\u9AD8</h4></div><div class="col"><img class="mb-3"${ssrRenderAttr("src", _imports_2)}><h4>\u901F\u5EA6\u5FEB</h4></div><div class="col"><img class="mb-3"${ssrRenderAttr("src", _imports_3)}><h4>\u53EF\u5BA2\u88FD\u5316</h4></div></div></div></div><div class="row justify-content-center" style="${ssrRenderStyle({ "margin-bottom": "10rem" })}"><div class="col"><h3 class="text-center mb-5">Our Services</h3><div class="row row-cols-3"><!--[-->`);
      ssrRenderList(unref(ourServices), (item, index) => {
        _push(`<div class="col p-4"><div class="card rounded border-light text-bg-primary"><img${ssrRenderAttr("src", _imports_4)} class="card-img-top"><div class="card-body"><h4 class="card-title text-center mt-3">${ssrInterpolate(item.title)}</h4><p class="card-text p-2" style="${ssrRenderStyle({ "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" })}">${ssrInterpolate(item.text)}</p><div class="d-grid gap-2 d-flex justify-content-end"><button type="button" class="btn icon btn-light p-0">`);
        _push(ssrRenderComponent(unref(SvgIcon), {
          type: "mdi",
          path: unref(mdiChevronRight)
        }, null, _parent));
        _push(`</button></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="row justify-content-center" style="${ssrRenderStyle({ "margin-bottom": "5rem" })}"><div class="col-6"><h3 class="text-center mb-5">Who need us?</h3><div class="row row-cols-2 g-5"><div class="col"><div class="card" style="${ssrRenderStyle({ "border-radius": "0 25% 0 25%" })}"><div class="${ssrRenderClass(`card-img-overlay ${unref(showUserGroup1) ? "text-bg-primary" : ""}`)}" style="${ssrRenderStyle({ "border-radius": "0 25% 0 25%" })}"><p style="${ssrRenderStyle([
        unref(showUserGroup1) ? null : { display: "none" },
        { "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" }
      ])}" class="card-text p-2"> RPA \u975E\u5E38\u9069\u5408\u525B\u5275\u696D\u3001\u9700\u8981\u8EAB\u517C\u591A\u8077\u7684\u4F60\uFF0C\u6BD4\u8D77\u81EA\u5DF1\u82B1\u6642\u9593\u8655\u7406\u7E41\u7463\u6587\u66F8\u4F5C\u696D\uFF0C\u4E0D\u5982\u958B\u767C\u4E00\u500B\u5C08\u5C6C\u81EA\u5DF1\u7684 RPA \u6A5F\u5668\u4EBA\u4F86\u5E6B\u52A9\u4F60\uFF01 </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_5)}><h4 class="card-title text-center">\u500B\u4EBA\u5DE5\u4F5C\u8005</h4></div></div></div><div class="col"><div class="card" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><div class="${ssrRenderClass(`card-img-overlay ${unref(showUserGroup2) ? "text-bg-primary" : ""}`)}" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><p style="${ssrRenderStyle([
        unref(showUserGroup2) ? null : { display: "none" },
        { "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" }
      ])}" class="card-text p-2"> \u7121\u8AD6\u4F60\u8EAB\u8655\u65BC\u79D1\u6280\u3001\u91D1\u878D\u3001\u96F6\u552E\u6216\u670D\u52D9\u696D\uFF0C\u90FD\u6709\u6A5F\u6703\u900F\u904E\u5C0E\u5165 RPA \u89E3\u653E\u91CD\u8907\u6027\u4EBA\u529B\u5DE5\u4F5C\uFF0C\u5C07\u6642\u9593\u8207\u5FC3\u529B\u6295\u5165\u66F4\u5177\u50F9\u503C\u7684\u4EFB\u52D9\u4E0A\uFF01 </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_6)}><h4 class="card-title text-center">\u4E0A\u73ED\u65CF</h4></div></div></div><div class="col"><div class="card" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><div class="${ssrRenderClass(`card-img-overlay ${unref(showUserGroup3) ? "text-bg-primary" : ""}`)}" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><p style="${ssrRenderStyle([
        unref(showUserGroup3) ? null : { display: "none" },
        { "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" }
      ])}" class="card-text p-2"> \u6709\u4E86RPA\u6A5F\u5668\u4EBA\u7576\u4F60\u7684\u884C\u653F\u52A9\u7406\uFF0C\u5DE5\u4F5C\u81EA\u7531\u5EA6\u4EE5\u53CA\u6548\u7387\u4E5F\u6703\u6709\u6240\u63D0\u5347\u3002 </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_7)}><h4 class="card-title text-center">\u9AD8\u968E\u4E3B\u7BA1</h4></div></div></div><div class="col"><div class="card" style="${ssrRenderStyle({ "border-radius": "0 25% 0 25%" })}"><div class="${ssrRenderClass(`card-img-overlay ${unref(showUserGroup4) ? "text-bg-primary" : ""}`)}" style="${ssrRenderStyle({ "border-radius": "0 25% 0 25%" })}"><p style="${ssrRenderStyle([
        unref(showUserGroup4) ? null : { display: "none" },
        { "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" }
      ])}" class="card-text p-2"> \u672A\u4F86\u5C07\u6703\u6709\u66F4\u591A\u4F01\u696D\u52A0\u5165 RPA \u884C\u5217\uFF0C\u5982\u679C\u4F60\u662F\u4F01\u696D IT \u4EBA\u54E1\uFF0C\u5B78\u7FD2 RPA \u66F4\u662F\u52E2\u5728\u5FC5\u884C\uFF01 </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_8)}><h4 class="card-title text-center">IT\u4EBA\u54E1</h4></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fe5a3e24.mjs.map
