import { addComponent, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@cgv.web/nuxt-ui',
    configKey: 'cgvwebUI',
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addComponent({
      name: 'MyTest',
      filePath: resolver.resolve('runtime/components/Test.vue'),
    });

    await installModule('@nuxtjs/tailwindcss', {
      config: { content: [resolver.resolve('runtime/**/*.{ts,vue}')] },
    });

    await installModule('@vueuse/nuxt');
    await installModule('nuxt-icon');
  },
});
