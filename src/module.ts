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
      filePath: resolver.resolve('runtime/components/basic/Tooltip'),
    });
    addComponent({
      name: 'UiContainer',
      filePath: resolver.resolve('runtime/components/basic/Container.vue'),
    });
    addComponent({
      name: 'UiMarquee',
      filePath: resolver.resolve('runtime/components/basic/Marquee.vue'),
    });
    addComponent({
      name: 'UiHighlightText',
      filePath: resolver.resolve('runtime/components/functional/HighlightText'),
    });
    addComponent({
      name: 'UiBreakpointViewer',
      filePath: resolver.resolve('runtime/components/other/BreakpointViewer.vue'),
    });
    addComponent({
      name: 'UiBadge',
      filePath: resolver.resolve('runtime/components/basic/Badge.vue'),
    });
    addComponent({
      name: 'UiDialog',
      filePath: resolver.resolve('runtime/components/basic/Dialog.vue'),
    });
    addComponent({
      name: 'UiSlideover',
      filePath: resolver.resolve('runtime/components/basic/Slideover.vue'),
    });

    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      if (Array.isArray(tailwindConfig.content))
        tailwindConfig.content.push(resolver.resolve('runtime/**/*.{vue,ts,mjs,cjs}'));
    });
  },
});
