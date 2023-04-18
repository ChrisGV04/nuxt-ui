<script setup lang="ts"></script>

<template>
  <div class="p-4">
    <h1 class="text-primary-600 font-mono text-xl uppercase">Playground</h1>

    <div class="mt-8 w-full rounded-xl bg-gray-100 p-8">
      <UiTooltip class="w-max">
        <span>Hover for tooltip</span>

        <template #tooltip>Welcome to the tooltip</template>
      </UiTooltip>
    </div>
  </div>
</template>
