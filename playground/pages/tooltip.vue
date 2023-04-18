<script setup lang="ts"></script>

<template>
  <UiContainer class="max-w-5xl py-4">
    <h1 class="text-primary-600 font-mono text-xl uppercase">Playground</h1>

    <UiContainer
      class="sticky top-0 mt-8 flex flex-nowrap space-x-8 overflow-auto rounded-xl bg-gray-100 py-8"
    >
      <UiTooltip class="shrink-0 hover:cursor-help">
        Hover for tooltip
        <template #tooltip>Welcome to the tooltip</template>
      </UiTooltip>

      <div v-for="i in 20" class="h-20 w-20 shrink-0 rounded-full bg-red-400"></div>
    </UiContainer>

    <div class="mt-20 h-screen w-20 bg-red-200"></div>
  </UiContainer>
</template>
