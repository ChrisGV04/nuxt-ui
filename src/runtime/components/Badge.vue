<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  dot: Boolean,
  rounded: Boolean,
  size: { type: String as PropType<'sm' | 'lg'>, default: 'sm' },
});
</script>

<template>
  <span
    :class="[
      'inline-flex items-center py-0.5 font-medium',
      size === 'sm' ? 'px-2.5 text-xs' : 'px-3 text-sm',
      rounded ? 'rounded' : 'rounded-full',
    ]"
  >
    <svg v-if="dot" viewBox="0 0 8 8" fill="currentColor" class="mr-1.5 h-2 w-2 text-current">
      <circle cx="4" cy="4" r="3" />
    </svg>

    <slot />

    <div v-if="$slots.action" class="cgvweb-badge__action">
      <slot name="action" />
    </div>
  </span>
</template>

<style>
.cgvweb-badge__action > * {
  margin-left: 0.125rem;
  margin-right: -0.125rem;
  display: flex;
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}
</style>
