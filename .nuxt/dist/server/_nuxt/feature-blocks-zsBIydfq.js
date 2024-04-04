import { _ as __nuxt_component_0 } from "./nuxt-link-D35ckuRb.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
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
  name: "featureBlocks",
  props: {
    componentName: {
      type: String,
      default: "feature-blocks"
    },
    content: {
      default: () => ({
        "theme": "dark",
        "label": "section label",
        "heading": "section heading secondary",
        "subheading": "optional section description",
        "cards": [
          {
            "theme": null,
            "img": "",
            "heading": "Card heading",
            "subheading": "Subheading",
            "description": "Pellentesque sagittis accumsan lectus, vel finibus mi tempus sit amet. Nam quis augue a odio fringilla.",
            "button": {
              "text": "Read more",
              "url": "/"
            }
          }
        ]
      }),
      type: Object
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: [
      $props.componentName,
      "theme-" + $props.content.theme
    ]
  }, _attrs))} data-v-edf2f104><div class="content-container" data-v-edf2f104><p class="description-header" data-v-edf2f104>${ssrInterpolate($props.content.label)}</p><h1 data-v-edf2f104>${ssrInterpolate($props.content.heading)}</h1><h4 data-v-edf2f104>${ssrInterpolate($props.content.subheading)}</h4></div><div class="block-container" data-v-edf2f104><!--[-->`);
  ssrRenderList($props.content.cards, (card, index) => {
    _push(`<div class="card" data-v-edf2f104><div class="img-container" data-v-edf2f104><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-edf2f104></div><div class="${ssrRenderClass([
      "card-content",
      "theme-" + card.theme
    ])}" data-v-edf2f104><h4 data-v-edf2f104>${ssrInterpolate(card.heading)}</h4><h5 data-v-edf2f104>${ssrInterpolate(card.subheading)}</h5><p data-v-edf2f104>${ssrInterpolate(card.description)}</p>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: card.button.url,
      class: "button"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(card.button.text)} &gt; `);
        } else {
          return [
            createTextVNode(toDisplayString(card.button.text) + " > ", 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feature-Blocks/feature-blocks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-edf2f104"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=feature-blocks-zsBIydfq.js.map
