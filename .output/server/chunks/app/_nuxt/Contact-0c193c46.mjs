import { defineComponent, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mb-4" }, _attrs))}><div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center"><div class="col-md-10 col-lg-8 col-xl-7"><h2 class="post-title">RPA \u6578\u4F4D\u512A\u5316\u5668</h2><p>\u6B61\u8FCE\u5728\u4E0B\u65B9\u7559\u8A00\u8AAA\u660E\u4F60\u7684\u9700\u6C42\uFF0C\u6216\u662F\u5BC4\u4FE1\u81F3\uFF1A<a href="mailto:rpadigitaltransformer@gmail.com">rpadigitaltransformer@gmail.com</a>\uFF0C\u6211\u5011\u5C07\u76E1\u5FEB\u8207\u4F60\u806F\u7E6B\uFF01 </p><p>\u4E5F\u53EF\u4EE5\u5230 RPA \u6578\u4F4D\u512A\u5316\u5668\u7684\u793E\u7FA4\u8FFD\u8E64\u6211\u5011\uFF01</p><div class="my-5"><form id="contactForm" data-sb-form-api-token="API_TOKEN"><div class="form-floating"><input${ssrRenderAttr("value", unref(form).name)} class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required"><label for="name">\u59D3\u540D</label><div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div></div><div class="form-floating"><input${ssrRenderAttr("value", unref(form).company)} class="form-control" id="company" type="text" placeholder="Enter your company..." data-sb-validations="required"><label for="company">\u55AE\u4F4D\u6216\u6A5F\u69CB\u540D\u7A31</label></div><div class="form-floating"><input${ssrRenderAttr("value", unref(form).email)} class="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email"><label for="email">E-mail</label><div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div><div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div></div><div class="form-floating"><input${ssrRenderAttr("value", unref(form).phone)} class="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required"><label for="phone">\u9023\u7D61\u96FB\u8A71</label><div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div></div><div class="form-floating"><textarea class="form-control" id="message" placeholder="Enter your message here..." style="${ssrRenderStyle({ "height": "12rem" })}" data-sb-validations="required">${ssrInterpolate(unref(form).message)}</textarea><label for="message">\u8A0A\u606F\u5167\u5BB9</label><div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div></div><br><div class="d-none" id="submitSuccessMessage"><div class="text-center mb-3"><div class="fw-bolder">Form submission successful!</div>To activate this form, sign up at<br><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></div></div><div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div><button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Send</button></form></div></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Contact-0c193c46.mjs.map
