import { createApp } from 'vue';
import { useStoryblok } from '@storyblok/vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(useStoryblok);
});