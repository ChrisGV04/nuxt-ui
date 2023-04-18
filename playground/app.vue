<script setup lang="ts">
import { useHead } from '#app';

useHead({ title: 'Nuxt UI' });
</script>

<template>
  <div>
    <header class="border-b border-gray-900/10 py-4">
      <UiContainer class="flex max-w-5xl items-center justify-between">
        <NuxtLink to="/" class="text-xl font-semibold text-gray-900">Nuxt UI</NuxtLink>

        <div>
          <NuxtLink to="/tooltip" class="hover:text-sky-600 hover:underline">Tooltips</NuxtLink>
        </div>
      </UiContainer>
    </header>

    <NuxtPage />
  </div>
</template>
