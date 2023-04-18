<script setup lang="ts">
defineProps({ noYPadding: Boolean, noXPadding: Boolean });
</script>

<template>
  <div :class="['mx-auto w-full', !noXPadding && 'px-4 sm:px-6 lg:px-8']">
    <slot />
  </div>
</template>
