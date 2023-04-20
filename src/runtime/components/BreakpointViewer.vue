<script setup lang="ts">
import { breakpointsTailwind, computedEager, useBreakpoints } from '@vueuse/core';

const bp = useBreakpoints(breakpointsTailwind);
const size = computedEager(() => bp.current().value.at(-1) || 'xs');
</script>

<template>
  <div
    class="pointer-events-none fixed bottom-0 right-0 z-[999] rounded-tl-lg bg-gray-500 px-4 py-2 font-mono text-white"
  >
    {{ size }}
  </div>
</template>
