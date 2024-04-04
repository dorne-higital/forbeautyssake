import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
  name: "notificationBanner",
  props: {
    componentName: {
      type: String,
      default: "notification-banner"
    },
    content: {
      default: () => ({
        "theme": "dark",
        "description": "optional desciptive text"
      }),
      type: Object
    }
  },
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    closeBanner() {
      this.isVisible = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.isVisible) {
    _push(`<section${ssrRenderAttrs(mergeProps({
      class: [
        $props.componentName,
        "theme-" + $props.content.theme
      ]
    }, _attrs))} data-v-6b27839c><div class="content-container" data-v-6b27839c><p data-v-6b27839c>${ssrInterpolate($props.content.description)}</p><span class="close" data-v-6b27839c> x </span></div></section>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Notification-Banner/notification-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notificationBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6b27839c"]]);

export { notificationBanner as default };
//# sourceMappingURL=notification-banner-B9IoJos5.mjs.map
