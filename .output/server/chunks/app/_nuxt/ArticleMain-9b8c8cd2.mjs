import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { u as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'crosspath';
import 'image-size';
import 'debounce';
import 'chokidar';
import 'anymatch';
import 'unist-util-visit';
import 'node:fs';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions/dist/find-index.js';
import '@dword-design/functions/dist/omit.js';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

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
