<script setup lang="ts">
import { useHead } from '#app';

useHead({ title: 'Nuxt UI' });
</script>

<template>
  <div>
    <header class="border-b border-gray-900/10 py-4">
      <UiContainer class="flex max-w-5xl items-center justify-between">
        <NuxtLink to="/" class="text-xl font-semibold text-gray-900">Nuxt UI</NuxtLink>

        <div class="flex space-x-1 text-gray-900">
          <NuxtLink to="/tooltip" class="link">Tooltip</NuxtLink>
          <NuxtLink to="/marquee" class="link">Marquee</NuxtLink>
          <NuxtLink to="/highlights" class="link">Highlights</NuxtLink>
        </div>
      </UiContainer>
    </header>

    <NuxtPage />
  </div>
</template>

<style scoped>
.link {
  @apply block rounded-md px-3 py-2 hover:bg-gray-100;
}
.link.router-link-active {
  @apply text-primary-500 underline;
}
</style>
