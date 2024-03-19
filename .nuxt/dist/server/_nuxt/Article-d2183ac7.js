import _sfc_main$1 from "./ContentQuery-c49d0806.js";
import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./query-7c4d20ea.js";
import "ufo";
import "ohash";
import "destr";
import "devalue";
import "klona";
import "./preview-8a59dd4b.js";
import "hookable";
import "cookie-es";
import "h3";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Article",
  __ssrInlineRender: true,
  setup(__props) {
    const searchText = ref("");
    const searchTexts = ref([]);
    const filterTypes = ref(["標題", "Tag", "分類", "簡介"]);
    const types = ref(["type", "type1", "type2", "type3", "type4"]);
    const filterType = ref("標題");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row gx-4 gx-lg-5 justify-content-center" }, _attrs))} data-v-1de7b831><div class="col-md-10 col-lg-8 col-xl-7" data-v-1de7b831><div class="input-group mb-3" data-v-1de7b831><div class="input-group-prepend" data-v-1de7b831><div class="dropdown" data-v-1de7b831><button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-v-1de7b831>${ssrInterpolate(unref(filterType))}</button><ul class="dropdown-menu" aria-labelledby="dropdownMenu" data-v-1de7b831><!--[-->`);
      ssrRenderList(unref(filterTypes), (type, index) => {
        _push(`<li data-v-1de7b831><button class="dropdown-item" type="button" data-v-1de7b831>${ssrInterpolate(type)}</button></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
      if (unref(filterType) === unref(filterTypes)[1]) {
        _push(`<input${ssrRenderAttr("value", unref(searchText))} type="text" class="form-control" placeholder="輸入查詢 Tag (禁止輸入半形空白)，點擊 Enter 以鍵入" aria-label="Username" aria-describedby="basic-addon1" data-v-1de7b831>`);
      } else if (unref(filterType) === unref(filterTypes)[2]) {
        _push(`<div style="${ssrRenderStyle({ "width": "60%", "background-color": "aliceblue" })}" class="dropdown" data-v-1de7b831><button style="${ssrRenderStyle({ "width": "100%" })}" class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-v-1de7b831>類型</button><ul style="${ssrRenderStyle({ "width": "100%" })}" class="dropdown-menu" aria-labelledby="dropdownMenu" data-v-1de7b831><!--[-->`);
        ssrRenderList(unref(types), (t, i) => {
          _push(`<li data-v-1de7b831><button class="dropdown-item" type="button" data-v-1de7b831>${ssrInterpolate(t)}</button></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<input${ssrRenderAttr("value", unref(searchText))} type="text" class="form-control" placeholder="輸入查詢內容" aria-label="Username" aria-describedby="basic-addon1" data-v-1de7b831>`);
      }
      _push(`</div>`);
      if (unref(filterType) === unref(filterTypes)[1]) {
        _push(`<div data-v-1de7b831><!--[-->`);
        ssrRenderList(unref(searchTexts), (tag) => {
          _push(`<span class="badge rounded-pill bg-secondary" data-v-1de7b831>${ssrInterpolate(tag)} <span class="badge rounded-pill bg-secondary" style="${ssrRenderStyle({ "cursor": "pointer" })}" title="移除" data-v-1de7b831>x</span></span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br data-v-1de7b831><main data-v-1de7b831>`);
      _push(ssrRenderComponent(_component_ContentQuery, {
        path: "/article",
        where: unref(where)
      }, {
        default: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(data, (article) => {
              _push2(`<div class="card mb-3" data-v-1de7b831${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "nav-link",
                to: article._path
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="row g-0" data-v-1de7b831${_scopeId2}><div class="col-md-4" data-v-1de7b831${_scopeId2}><img${ssrRenderAttr("src", article.navImage)} class="img-fluid rounded-start" data-v-1de7b831${_scopeId2}></div><div class="col-md-8" data-v-1de7b831${_scopeId2}><div class="card-body" data-v-1de7b831${_scopeId2}><h3 class="card-title" data-v-1de7b831${_scopeId2}><span class="badge bg-secondary" data-v-1de7b831${_scopeId2}>${ssrInterpolate(article.type)}</span> ${ssrInterpolate(article.title)}</h3><p class="card-text nav-description" data-v-1de7b831${_scopeId2}>${ssrInterpolate(article.description)}</p><p class="card-text" data-v-1de7b831${_scopeId2}><!--[-->`);
                    ssrRenderList(article.tags, (tag, index) => {
                      _push3(`<span class="badge rounded-pill bg-secondary" data-v-1de7b831${_scopeId2}>${ssrInterpolate(tag)}</span>`);
                    });
                    _push3(`<!--]--><br data-v-1de7b831${_scopeId2}><small class="text-muted d-flex justify-content-end" data-v-1de7b831${_scopeId2}> Posted by  <a href="#!" data-v-1de7b831${_scopeId2}>${ssrInterpolate(article.author)}</a>  on ${ssrInterpolate(new Date(article.updated).toDateString())}</small></p></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "row g-0" }, [
                        createVNode("div", { class: "col-md-4" }, [
                          createVNode("img", {
                            src: article.navImage,
                            class: "img-fluid rounded-start"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "col-md-8" }, [
                          createVNode("div", { class: "card-body" }, [
                            createVNode("h3", { class: "card-title" }, [
                              createVNode("span", { class: "badge bg-secondary" }, toDisplayString(article.type), 1),
                              createTextVNode(" " + toDisplayString(article.title), 1)
                            ]),
                            createVNode("p", { class: "card-text nav-description" }, toDisplayString(article.description), 1),
                            createVNode("p", { class: "card-text" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(article.tags, (tag, index) => {
                                return openBlock(), createBlock("span", {
                                  class: "badge rounded-pill bg-secondary",
                                  key: index
                                }, toDisplayString(tag), 1);
                              }), 128)),
                              createVNode("br"),
                              createVNode("small", { class: "text-muted d-flex justify-content-end" }, [
                                createTextVNode(" Posted by  "),
                                createVNode("a", { href: "#!" }, toDisplayString(article.author), 1),
                                createTextVNode("  on " + toDisplayString(new Date(article.updated).toDateString()), 1)
                              ])
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(data, (article) => {
                return openBlock(), createBlock("div", {
                  key: article._path,
                  class: "card mb-3"
                }, [
                  createVNode(_component_NuxtLink, {
                    class: "nav-link",
                    to: article._path
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "row g-0" }, [
                        createVNode("div", { class: "col-md-4" }, [
                          createVNode("img", {
                            src: article.navImage,
                            class: "img-fluid rounded-start"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "col-md-8" }, [
                          createVNode("div", { class: "card-body" }, [
                            createVNode("h3", { class: "card-title" }, [
                              createVNode("span", { class: "badge bg-secondary" }, toDisplayString(article.type), 1),
                              createTextVNode(" " + toDisplayString(article.title), 1)
                            ]),
                            createVNode("p", { class: "card-text nav-description" }, toDisplayString(article.description), 1),
                            createVNode("p", { class: "card-text" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(article.tags, (tag, index) => {
                                return openBlock(), createBlock("span", {
                                  class: "badge rounded-pill bg-secondary",
                                  key: index
                                }, toDisplayString(tag), 1);
                              }), 128)),
                              createVNode("br"),
                              createVNode("small", { class: "text-muted d-flex justify-content-end" }, [
                                createTextVNode(" Posted by  "),
                                createVNode("a", { href: "#!" }, toDisplayString(article.author), 1),
                                createTextVNode("  on " + toDisplayString(new Date(article.updated).toDateString()), 1)
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]);
              }), 128))
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-1de7b831${_scopeId}>No authors found.</p>`);
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
const Article_vue_vue_type_style_index_0_scoped_1de7b831_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Article = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1de7b831"]]);
export {
  Article as default
};
//# sourceMappingURL=Article-d2183ac7.js.map
