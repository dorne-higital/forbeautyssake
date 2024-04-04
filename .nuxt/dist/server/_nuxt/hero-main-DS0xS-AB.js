import { _ as __nuxt_component_0$1 } from "./nuxt-link-D35ckuRb.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./test-CmX4_SFq.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
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
import "devalue";
import "destr";
const _sfc_main = {
  name: "heroMain",
  components: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-container" }, _attrs))} data-v-15737264><div class="hero-banner" data-v-15737264><div class="hero-content" data-v-15737264><p class="description-header" data-v-15737264>Beauty redefined</p><h1 data-v-15737264> Brow perfection awaits, Your transformation begins now </h1>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/booking",
    class: "button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Book Now `);
      } else {
        return [
          createTextVNode(" Book Now ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="img-container" data-v-15737264><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-15737264><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-15737264><img${ssrRenderAttr("src", _imports_0)} alt="" class="last-of-type" data-v-15737264></div></div><div class="hero-shape" data-v-15737264></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero-Main/hero-main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-15737264"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=hero-main-DS0xS-AB.js.map
