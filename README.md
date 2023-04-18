# CGV WEB Nuxt UI

A set of commonly used Nuxt 3 components used in CGV WEB projects, designed to be used with TailwindCSS and HeadlessUI.

## Installation

This library only supports Nuxt 3 applications and it depends on the `@nuxtjs/tailwindcss` and `@vueuse/core` packages to work.

```bash
pnpm i -D @cgv.web/nuxt-ui @nuxtjs/tailwindcss @vueuse/core @vueuse/nuxt
```

## Getting started

To use the library, you must add it to your `nuxt.config.ts` under the `modules` option and right before the TailwindCSS and VueUse modules:

```ts
export default defineNuxtConfig({
  modules: ['@cgv.web/nuxt-ui', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
});
```

And that's it. All of the components in the library should be auto-imported and they are all prefixed with `Ui` to avoid naming collisions.

## Next steps

This library is not necessarily intended for public use, since it is specifically built for the way we build projects at CGV WEB, so it is highly opinionated.

For questions, get in touch at christian@chrisgvdev.com.
