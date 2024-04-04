import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "devalue";
import "destr";
const _imports_0 = "" + __buildAssetsURL("fbs-logo.I2n7c-yo.png");
const _sfc_main = {
  name: "mainNab",
  components: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "nav_section" }, _attrs))} data-v-5caf75b5><nav data-v-5caf75b5><a href="/" class="nav_logo" data-v-5caf75b5><img${ssrRenderAttr("src", _imports_0)} alt="Logo for For Beautys Sake" data-v-5caf75b5></a><div class="nav-btn" onclick="toggleNavMenu()" data-v-5caf75b5><span class="material-symbols-rounded" data-v-5caf75b5> density_medium </span></div><ul class="desktop_nav" data-v-5caf75b5><li data-v-5caf75b5><a href="/" data-v-5caf75b5>Home</a></li><li data-v-5caf75b5><a href="/about" data-v-5caf75b5>About</a></li><li data-v-5caf75b5><a href="/treatments" data-v-5caf75b5>Treatments</a></li><li data-v-5caf75b5><a href="/contact" data-v-5caf75b5>Get in Touch</a></li><li data-v-5caf75b5><a href="/booking" data-v-5caf75b5>Book Appointment</a></li></ul><ul class="mobile_nav" id="nav_menu" data-v-5caf75b5><section class="mobile_nav_sect" data-v-5caf75b5><span class="material-symbols-rounded close" onclick="toggleNavMenu()" data-v-5caf75b5> close </span><li data-v-5caf75b5><a href="/" data-v-5caf75b5>Home</a></li><li data-v-5caf75b5><a href="/" data-v-5caf75b5>Home</a></li><li data-v-5caf75b5><a href="/" data-v-5caf75b5>Home</a></li></section></ul></nav></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main-Nav/main-nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5caf75b5"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=main-nav-BmIUGMMR.js.map
