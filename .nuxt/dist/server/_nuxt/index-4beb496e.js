import { mergeProps, useSSRContext, defineComponent, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { mdiChevronRight } from "@mdi/js";
const _imports_0 = "" + __buildAssetsURL("Business Plan-amico.b593602c.svg");
const _imports_1 = "" + __buildAssetsURL("Social strategy-amico.56cab27d.svg");
const _imports_2 = "" + __buildAssetsURL("Take Away-amico.f942001b.svg");
const _imports_3 = "" + __buildAssetsURL("Collaboration-amico.a6191a3d.svg");
const _imports_4 = "" + __buildAssetsURL("article-bg.a8576d38.jpg");
const _imports_5 = "" + __buildAssetsURL("Designer girl-amico.b56ce843.svg");
const _imports_6 = "" + __buildAssetsURL("At work-amico.d933d43f.svg");
const _imports_7 = "" + __buildAssetsURL("Working-amico.da169cdd.svg");
const _imports_8 = "" + __buildAssetsURL("Code typing-amico.055deb4d.svg");
const svgIcon_vue_vue_type_style_index_0_scoped_76aa6b74_lang = "";
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
        title: "服務案例",
        text: "讓我們協助你梳理現有作業流程，挖掘問題所在，並進行流程優化再設計，為你的工作創造更多價值！"
      },
      {
        title: "專題文章",
        text: "讓我們協助你梳理現有作業流程，挖掘問題所在，並進行流程優化再設計，為你的工作創造更多價值！"
      },
      {
        title: "線上課程",
        text: "讓我們協助你梳理現有作業流程，挖掘問題所在，並進行流程優化再設計，為你的工作創造更多價值！"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container g-5" }, _attrs))}><div class="row justify-content-center align-items-center" style="${ssrRenderStyle({ "margin-top": "5rem", "margin-bottom": "10rem" })}"><div class="col-md-6 pe-5"><img${ssrRenderAttr("src", _imports_0)}></div><div class="col-md-6 ps-5"><h3 class="mb-5">About Us</h3><p style="${ssrRenderStyle({ "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" })}"> 我們是以「機器人流程自動化（RPA）」，結合「人工智慧（AI）」為主題的中文學習社群，旨在分享 RPA + AI 的學習資源、應用實例和最新發展趨勢，讓工作者透過自動化工具的有效應用，創造數位優化與轉型契機。 </p></div></div><div class="row justify-content-center" style="${ssrRenderStyle({ "margin-bottom": "10rem" })}"><div class="col text-center"><h3 class="mb-5">What is RPA ?</h3><p style="${ssrRenderStyle({ "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" })}"> 一個活在你電腦桌面以及不同應用程式之間，24小時不休息的「資訊及數據」搬運工 </p><div class="row row-cols-3"><div class="col"><img class="mb-3"${ssrRenderAttr("src", _imports_1)}><h4>準確率高</h4></div><div class="col"><img class="mb-3"${ssrRenderAttr("src", _imports_2)}><h4>速度快</h4></div><div class="col"><img class="mb-3"${ssrRenderAttr("src", _imports_3)}><h4>可客製化</h4></div></div></div></div><div class="row justify-content-center" style="${ssrRenderStyle({ "margin-bottom": "10rem" })}"><div class="col"><h3 class="text-center mb-5">Our Services</h3><div class="row row-cols-3"><!--[-->`);
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
      ])}" class="card-text p-2"> RPA 非常適合剛創業、需要身兼多職的你，比起自己花時間處理繁瑣文書作業，不如開發一個專屬自己的 RPA 機器人來幫助你！ </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_5)}><h4 class="card-title text-center">個人工作者</h4></div></div></div><div class="col"><div class="card" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><div class="${ssrRenderClass(`card-img-overlay ${unref(showUserGroup2) ? "text-bg-primary" : ""}`)}" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><p style="${ssrRenderStyle([
        unref(showUserGroup2) ? null : { display: "none" },
        { "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" }
      ])}" class="card-text p-2"> 無論你身處於科技、金融、零售或服務業，都有機會透過導入 RPA 解放重複性人力工作，將時間與心力投入更具價值的任務上！ </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_6)}><h4 class="card-title text-center">上班族</h4></div></div></div><div class="col"><div class="card" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><div class="${ssrRenderClass(`card-img-overlay ${unref(showUserGroup3) ? "text-bg-primary" : ""}`)}" style="${ssrRenderStyle({ "border-radius": "25% 0 25% 0" })}"><p style="${ssrRenderStyle([
        unref(showUserGroup3) ? null : { display: "none" },
        { "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" }
      ])}" class="card-text p-2"> 有了RPA機器人當你的行政助理，工作自由度以及效率也會有所提升。 </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_7)}><h4 class="card-title text-center">高階主管</h4></div></div></div><div class="col"><div class="card" style="${ssrRenderStyle({ "border-radius": "0 25% 0 25%" })}"><div class="${ssrRenderClass(`card-img-overlay ${unref(showUserGroup4) ? "text-bg-primary" : ""}`)}" style="${ssrRenderStyle({ "border-radius": "0 25% 0 25%" })}"><p style="${ssrRenderStyle([
        unref(showUserGroup4) ? null : { display: "none" },
        { "font-size": "20px", "line-height": "35px", "letter-spacing": "0.5px" }
      ])}" class="card-text p-2"> 未來將會有更多企業加入 RPA 行列，如果你是企業 IT 人員，學習 RPA 更是勢在必行！ </p></div><div class="card-body"><img${ssrRenderAttr("src", _imports_8)}><h4 class="card-title text-center">IT人員</h4></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-4beb496e.js.map
