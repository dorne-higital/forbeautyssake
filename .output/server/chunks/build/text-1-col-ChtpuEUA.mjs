import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  name: "text1Col",
  props: {
    componentName: {
      type: String,
      default: "text-1-col"
    },
    content: {
      default: () => ({
        "theme": "dark",
        "align": "centre",
        "label": "section label",
        "heading": "section heading secondary",
        "subheading": "optional section subheading",
        "description": "optional desciptive text",
        "button": {
          "text": "Read more",
          "url": "/"
        }
      }),
      type: Object
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: [
      $props.componentName,
      "theme-" + $props.content.theme,
      "align-" + $props.content.align
    ]
  }, _attrs))} data-v-699627ef><div class="content-container" data-v-699627ef>`);
  if ((_b = (_a = $props.content) == null ? void 0 : _a.description) == null ? void 0 : _b.length) {
    _push(`<p class="description-header" data-v-699627ef>${ssrInterpolate($props.content.label)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_d = (_c = $props.content) == null ? void 0 : _c.heading) == null ? void 0 : _d.length) {
    _push(`<h1 class="heading" data-v-699627ef>${ssrInterpolate($props.content.heading)}</h1>`);
  } else {
    _push(`<!---->`);
  }
  if ((_f = (_e = $props.content) == null ? void 0 : _e.subheading) == null ? void 0 : _f.length) {
    _push(`<h4 class="subheading" data-v-699627ef>${ssrInterpolate($props.content.subheading)}</h4>`);
  } else {
    _push(`<!---->`);
  }
  if ((_h = (_g = $props.content) == null ? void 0 : _g.description) == null ? void 0 : _h.length) {
    _push(`<p class="description" data-v-699627ef>${ssrInterpolate($props.content.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_k = (_j = (_i = $props.content) == null ? void 0 : _i.button) == null ? void 0 : _j.text) == null ? void 0 : _k.length) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: (_m = (_l = $props.content) == null ? void 0 : _l.button) == null ? void 0 : _m.url,
      class: "button"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($props.content.button.text)}`);
        } else {
          return [
            createTextVNode(toDisplayString($props.content.button.text), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Text-1-Col/text-1-col.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-699627ef"]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=text-1-col-ChtpuEUA.mjs.map
