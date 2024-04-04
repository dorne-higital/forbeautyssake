export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'VGi5VWGmYv7VyAgG8CAyXgtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
})
