<script setup lang="ts"></script>

<template>
  <UiContainer class="max-w-5xl py-4">
    <div class="flex items-start gap-8">
      <div class="flex flex-1 flex-nowrap gap-8 overflow-auto rounded-xl bg-gray-100 p-8">
        <UiTooltip class="shrink-0 hover:cursor-help">
          Hover me
          <template #tooltip>Welcome to the tooltip</template>
        </UiTooltip>

        <div v-for="i in 10" class="h-20 w-20 shrink-0 rounded-full bg-red-400"></div>
      </div>

      <div class="flex max-h-96 flex-col gap-8 overflow-auto rounded-xl bg-gray-100 px-8">
        <div v-for="i in 2" class="h-20 w-20 shrink-0 rounded-full bg-red-400"></div>
        <UiTooltip position="right" class="w-max hover:cursor-help">
          Hover me
          <template #tooltip>Welcome to the tooltip</template>
        </UiTooltip>
        <div v-for="i in 5" class="h-20 w-20 shrink-0 rounded-full bg-red-400"></div>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-4 gap-8">
      <UiTooltip
        position="top"
        class="bg-primary-600 flex items-center justify-center rounded-md p-3 hover:cursor-help"
      >
        <span class="text-center text-white">Top</span>
        <template #tooltip>I'm above you</template>
      </UiTooltip>
      <UiTooltip
        position="bottom"
        class="bg-primary-600 flex items-center justify-center rounded-md p-3 hover:cursor-help"
      >
        <span class="text-center text-white">Bottom</span>
        <template #tooltip>I'm below you</template>
      </UiTooltip>
      <UiTooltip
        position="left"
        class="bg-primary-600 flex items-center justify-center rounded-md p-3 hover:cursor-help"
      >
        <span class="text-center text-white">Left</span>
        <template #tooltip>On your left</template>
      </UiTooltip>
      <UiTooltip
        position="right"
        class="bg-primary-600 flex items-center justify-center rounded-md p-3 hover:cursor-help"
      >
        <span class="text-center text-white">Right</span>
        <template #tooltip>On your right</template>
      </UiTooltip>
    </div>

    <div
      class="bg-primary-100 border-primary-900/10 text-primary-800 mt-8 h-[80vh] rounded-md border p-4 text-center"
    >
      <span>Space to test window scroll</span>
    </div>
  </UiContainer>
</template>
