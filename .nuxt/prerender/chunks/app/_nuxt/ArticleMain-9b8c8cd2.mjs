import { defineComponent, mergeProps, useSSRContext } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue/index.mjs';
import { u as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue/server-renderer/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ofetch/dist/node.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/hookable/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unctx/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/h3/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ufo/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unhead/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/@unhead/shared/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/destr/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/scule/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/klona/dist/index.mjs';
import 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ohash/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleMain",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "mb-4" }, _attrs))}><div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center"><div class="col-md-10 col-lg-8 col-xl-7"><div class="lh-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="d-flex justify-content-end mb-4"><span class="btn btn-primary text-uppercase">Back \u2192</span></div></div></div></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ArticleMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ArticleMain-9b8c8cd2.mjs.map
