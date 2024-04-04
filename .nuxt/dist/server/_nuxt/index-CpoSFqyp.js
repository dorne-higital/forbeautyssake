import __nuxt_component_0 from "./hero-main-DS0xS-AB.js";
import __nuxt_component_1 from "./text-image-split-8h_6UKJ3.js";
import __nuxt_component_2 from "./feature-blocks-zsBIydfq.js";
import __nuxt_component_3 from "./text-1-col-ChtpuEUA.js";
import { toRef, isRef, withAsyncContext, resolveComponent, unref, useSSRContext } from "vue";
import { u as useNuxtApp, P as Pe } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./nuxt-link-D35ckuRb.js";
import "ufo";
import "./test-CmX4_SFq.js";
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
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useAsyncStoryblok = async (url, apiOptions = {}, bridgeOptions = {}) => {
  const uniqueKey = `${JSON.stringify(apiOptions)}${url}`;
  const story = useState(`${uniqueKey}-state`);
  const storyblokApiInstance = Pe();
  if (!story.value) {
    const { data } = await storyblokApiInstance.get(
      `cdn/stories/${url}`,
      apiOptions
    );
    story.value = data.story;
  }
  return story;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const story = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok(
      "home",
      { version: "draft" },
      {
        customParent: "https://app.storyblok.com"
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _component_hero_main = __nuxt_component_0;
      const _component_text_image_split = __nuxt_component_1;
      const _component_feature_blocks = __nuxt_component_2;
      const _component_text_1_col = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(story)) {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          blok: unref(story).content
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_hero_main, null, null, _parent));
      _push(ssrRenderComponent(_component_text_image_split, { content: {
        "theme": "color-2",
        "order": "image-text",
        "label": "Who we are",
        "heading": "For Beauty's Sake",
        "subheading": "Discover Brow Perfection: Where Elegance Meets Expertise",
        "description": "some descriptive text goes here. some descriptive text goes here. some descriptive text goes here. some descriptive text goes here. "
      } }, null, _parent));
      _push(ssrRenderComponent(_component_feature_blocks, { content: {
        "theme": "",
        "label": "What we offer",
        "heading": "A selection of what we can do",
        "subheading": "Some optional descriptuve subheading",
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
          },
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
          },
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
      } }, null, _parent));
      _push(ssrRenderComponent(_component_text_1_col, { content: {
        "theme": "",
        "align": "centre",
        "heading": "For Beauty's Sake",
        "subheading": "Discover Brow Perfection: Where Elegance Meets Expertise",
        "button": {
          "text": "Read more",
          "url": "about"
        }
      } }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CpoSFqyp.js.map
