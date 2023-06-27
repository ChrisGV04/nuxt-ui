<script setup lang="ts">
export interface ContainerProps {
  noXPadding?: boolean;
}

defineProps<ContainerProps>();
</script>

<template>
  <div :class="['mx-auto w-full', !noXPadding && 'px-4 sm:px-6 lg:px-8']">
    <slot />
  </div>
</template>
