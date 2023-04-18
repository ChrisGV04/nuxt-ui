import { addComponent, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@cgv.web/nuxt-ui',
    configKey: 'cgvwebUI',
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addComponent({
      name: 'UiTooltip',
      filePath: resolver.resolve('runtime/components/Tooltip.ts'),
    });

    await installModule('@nuxtjs/tailwindcss', {
      viewer: false,
      config: { content: [resolver.resolve('runtime/**/*.{ts,vue}')] },
    });
  },
});
