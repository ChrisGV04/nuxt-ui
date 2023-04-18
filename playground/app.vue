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
          <NuxtLink
            to="/tooltip"
            active-class="text-primary-500 underline"
            class="block rounded-md px-3 py-2 hover:bg-gray-100"
            >Tooltip</NuxtLink
          >
          <NuxtLink
            to="/marquee"
            active-class="text-primary-500 underline"
            class="block rounded-md px-3 py-2 hover:bg-gray-100"
            >Marquee</NuxtLink
          >
        </div>
      </UiContainer>
    </header>

    <NuxtPage />
  </div>
</template>
