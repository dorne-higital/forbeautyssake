import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./test-CmX4_SFq.js";
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
const _sfc_main = {
  name: "textImageSplit",
  props: {
    componentName: {
      type: String,
      default: "text-image-split"
    },
    content: {
      default: () => ({
        "theme": "dark",
        "order": "image-text",
        "label": "section label",
        "heading": "section heading secondary",
        "subheading": "optional section subheading",
        "description": "optional desciptive text",
        "button": {
          "text": "Read more",
          "url": "/"
        },
        "image": {
          "url": "",
          "alt": ""
        }
      }),
      type: Object
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: [
      $props.componentName,
      "theme-" + $props.content.theme,
      "order-" + $props.content.order
    ]
  }, _attrs))} data-v-e4540b1e><div class="content-container" data-v-e4540b1e><p class="description-header" data-v-e4540b1e>${ssrInterpolate($props.content.label)}</p><h1 data-v-e4540b1e>${ssrInterpolate($props.content.heading)}</h1><h4 data-v-e4540b1e>${ssrInterpolate($props.content.subheading)}</h4><p data-v-e4540b1e>${ssrInterpolate($props.content.description)}</p></div><div class="img-container" data-v-e4540b1e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-e4540b1e></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Text-Image-Split/text-image-split.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e4540b1e"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=text-image-split-8h_6UKJ3.js.map
