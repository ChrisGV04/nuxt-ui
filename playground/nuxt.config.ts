export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  typescript: { strict: true },
  tailwindcss: { viewer: false },
});
