<script setup lang="ts">
import { breakpointsTailwind, computedEager, useBreakpoints } from '@vueuse/core';
import { ref } from 'vue';

const bp = useBreakpoints(breakpointsTailwind);
const size = computedEager(() => bp.current().value.at(-1) || 'xs');
const switchSide = ref(false);
</script>

<template>
  <div class="pointer-events-none fixed inset-x-0 bottom-0 z-[999] flex justify-between">
    <div :class="[!switchSide && 'opacity-0', 'rounded-tr-lg bg-gray-500 px-4 py-2 font-mono text-white']">
      {{ size }}
    </div>

    <div
      @pointerenter="switchSide = true"
      @pointerleave="switchSide = false"
      :class="[
        switchSide && 'opacity-0',
        'pointer-events-auto select-none rounded-tl-lg bg-gray-500 px-4 py-2 font-mono text-white',
      ]"
    >
      {{ size }}
    </div>
  </div>
</template>
