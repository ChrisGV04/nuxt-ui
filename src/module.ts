import { addComponent, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@cgv.web/nuxt-ui',
    configKey: 'cgvwebUI',
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addComponent({
      name: 'UiTooltip',
      filePath: resolver.resolve('runtime/components/Tooltip'),
    });
    addComponent({
      name: 'UiContainer',
      filePath: resolver.resolve('runtime/components/Container.vue'),
    });
    addComponent({
      name: 'UiMarquee',
      filePath: resolver.resolve('runtime/components/Marquee.vue'),
    });
    addComponent({
      name: 'UiHighlightText',
      filePath: resolver.resolve('runtime/components/HighlightText'),
    });
    addComponent({
      name: 'UiBreakpointViewer',
      filePath: resolver.resolve('runtime/components/BreakpointViewer'),
    });

    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      if (Array.isArray(tailwindConfig.content))
        tailwindConfig.content.push(resolver.resolve('runtime/**/*.{vue,ts,mjs,cjs}'));
    });
  },
});
