import { defineComponent, ref, reactive, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([
      "演講",
      "工作坊",
      "長期課程",
      "RPA顧問導入",
      "文章授權",
      "其他"
    ]);
    const form = reactive({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
      service: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mb-4" }, _attrs))}><div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center"><div class="col-md-10 col-lg-8 col-xl-7"><h2 class="post-title">RPA 數位優化器</h2><p>歡迎在下方留言說明你的需求，或是寄信至：<a href="mailto:rpadigitaltransformer@gmail.com">rpadigitaltransformer@gmail.com</a>，我們將盡快與你聯繫！ </p><p>也可以到 RPA 數位優化器的社群追蹤我們！</p><div class="my-5"><form id="contactForm" data-sb-form-api-token="API_TOKEN"><div class="form-floating"><input${ssrRenderAttr("value", unref(form).name)} class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required"><label for="name">姓名</label><div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div></div><div class="form-floating"><input${ssrRenderAttr("value", unref(form).company)} class="form-control" id="company" type="text" placeholder="Enter your company..." data-sb-validations="required"><label for="company">單位或機構名稱</label></div><div class="form-floating"><input${ssrRenderAttr("value", unref(form).email)} class="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email"><label for="email">E-mail</label><div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div><div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div></div><div class="form-floating"><input${ssrRenderAttr("value", unref(form).phone)} class="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required"><label for="phone">連絡電話</label><div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div></div><div class="form-floating"><select class="form-select" id="servicesList"><!--[-->`);
      ssrRenderList(unref(services), (service, index) => {
        _push(`<option${ssrRenderAttr("value", service)}>${ssrInterpolate(service)}</option>`);
      });
      _push(`<!--]--></select><label for="servicesList">詢問服務</label></div><div class="form-floating"><textarea class="form-control" id="message" placeholder="Enter your message here..." style="${ssrRenderStyle({ "height": "12rem" })}" data-sb-validations="required">${ssrInterpolate(unref(form).message)}</textarea><label for="message">訊息內容</label><div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div></div><br><div class="d-none" id="submitSuccessMessage"><div class="text-center mb-3"><div class="fw-bolder">Form submission successful!</div>To activate this form, sign up at<br><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></div></div><div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div><button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Send</button></form></div></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Contact-bcd7087f.js.map
