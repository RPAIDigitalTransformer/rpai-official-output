import _sfc_main$1 from './ContentQuery-c49d0806.mjs';
import { _ as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './query-7c4d20ea.mjs';
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
import './preview-8a59dd4b.mjs';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Case",
  __ssrInlineRender: true,
  setup(__props) {
    const searchText = ref("");
    const searchTexts = ref([]);
    const filterTypes = ref(["\u6A19\u984C", "Tag", "\u5206\u985E", "\u7C21\u4ECB"]);
    const types = ref(["type", "type1", "type2", "type3", "type4"]);
    const filterType = ref("\u6A19\u984C");
    const where = computed(() => {
      switch (filterType.value) {
        case filterTypes.value[0]:
          return { title: { $regex: searchText.value } };
        case filterTypes.value[1]:
          return { $and: searchTexts.value.map((i) => ({ tags: { $regex: i } })) };
        case filterTypes.value[2]:
          return { type: searchText.value === "" ? { $regex: "" } : searchText.value };
        case filterTypes.value[3]:
          return { description: { $regex: searchText.value } };
        default:
          return { title: { $regex: searchText.value } };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentQuery = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row gx-4 gx-lg-5 justify-content-center" }, _attrs))} data-v-d6aa63df><div class="col-md-10 col-lg-8 col-xl-7" data-v-d6aa63df><div class="input-group mb-3" data-v-d6aa63df><div class="input-group-prepend" data-v-d6aa63df><div class="dropdown" data-v-d6aa63df><button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-v-d6aa63df>${ssrInterpolate(unref(filterType))}</button><ul class="dropdown-menu" aria-labelledby="dropdownMenu" data-v-d6aa63df><!--[-->`);
      ssrRenderList(unref(filterTypes), (type, index) => {
        _push(`<li data-v-d6aa63df><button class="dropdown-item" type="button" data-v-d6aa63df>${ssrInterpolate(type)}</button></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
      if (unref(filterType) === unref(filterTypes)[1]) {
        _push(`<input${ssrRenderAttr("value", unref(searchText))} type="text" class="form-control" placeholder="\u8F38\u5165\u67E5\u8A62 Tag (\u7981\u6B62\u8F38\u5165\u534A\u5F62\u7A7A\u767D)\uFF0C\u9EDE\u64CA Enter \u4EE5\u9375\u5165" aria-label="Username" aria-describedby="basic-addon1" data-v-d6aa63df>`);
      } else if (unref(filterType) === unref(filterTypes)[2]) {
        _push(`<div style="${ssrRenderStyle({ "width": "60%", "background-color": "aliceblue" })}" class="dropdown" data-v-d6aa63df><button style="${ssrRenderStyle({ "width": "100%" })}" class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-v-d6aa63df>\u985E\u578B</button><ul style="${ssrRenderStyle({ "width": "100%" })}" class="dropdown-menu" aria-labelledby="dropdownMenu" data-v-d6aa63df><!--[-->`);
        ssrRenderList(unref(types), (t, i) => {
          _push(`<li data-v-d6aa63df><button class="dropdown-item" type="button" data-v-d6aa63df>${ssrInterpolate(t)}</button></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<input${ssrRenderAttr("value", unref(searchText))} type="text" class="form-control" placeholder="\u8F38\u5165\u67E5\u8A62\u5167\u5BB9" aria-label="Username" aria-describedby="basic-addon1" data-v-d6aa63df>`);
      }
      _push(`</div>`);
      if (unref(filterType) === unref(filterTypes)[1]) {
        _push(`<div data-v-d6aa63df><!--[-->`);
        ssrRenderList(unref(searchTexts), (tag) => {
          _push(`<span class="badge rounded-pill bg-secondary" data-v-d6aa63df>${ssrInterpolate(tag)} <span class="badge rounded-pill bg-secondary" style="${ssrRenderStyle({ "cursor": "pointer" })}" title="\u79FB\u9664" data-v-d6aa63df>x</span></span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br data-v-d6aa63df><main data-v-d6aa63df>`);
      _push(ssrRenderComponent(_component_ContentQuery, {
        path: "/case",
        where: unref(where)
      }, {
        default: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-wrap mb-3" data-v-d6aa63df${_scopeId}><!--[-->`);
            ssrRenderList(data, (article) => {
              _push2(`<div class="p-2 bd-highlight" style="${ssrRenderStyle({ "max-width": "28rem", "margin": "1em" })}" data-v-d6aa63df${_scopeId}><div class="card bg-dark text-white nav-card" data-v-d6aa63df${_scopeId}><img class="card-img bg-img"${ssrRenderAttr("src", article.navImage)} data-v-d6aa63df${_scopeId}><div class="card-img-overlay" data-v-d6aa63df${_scopeId}><h5 class="card-title" data-v-d6aa63df${_scopeId}>${ssrInterpolate(article.title)}</h5><p class="card-text nav-text" data-v-d6aa63df${_scopeId}>${ssrInterpolate(article.description)}</p>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "nav-link",
                to: article._path
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="btn btn-primary text-uppercase" data-v-d6aa63df${_scopeId2}> \u67E5\u770B\u66F4\u591A \u2192 </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "btn btn-primary text-uppercase" }, " \u67E5\u770B\u66F4\u591A \u2192 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-wrap mb-3" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(data, (article) => {
                  return openBlock(), createBlock("div", {
                    class: "p-2 bd-highlight",
                    key: article._path,
                    style: { "max-width": "28rem", "margin": "1em" }
                  }, [
                    createVNode("div", { class: "card bg-dark text-white nav-card" }, [
                      createVNode("img", {
                        class: "card-img bg-img",
                        src: article.navImage
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "card-img-overlay" }, [
                        createVNode("h5", { class: "card-title" }, toDisplayString(article.title), 1),
                        createVNode("p", { class: "card-text nav-text" }, toDisplayString(article.description), 1),
                        createVNode(_component_NuxtLink, {
                          class: "nav-link",
                          to: article._path
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "btn btn-primary text-uppercase" }, " \u67E5\u770B\u66F4\u591A \u2192 ")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-d6aa63df${_scopeId}>No authors found.</p>`);
          } else {
            return [
              createVNode("p", null, "No authors found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Case.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Case = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6aa63df"]]);

export { Case as default };
//# sourceMappingURL=Case-2d9c6384.mjs.map
