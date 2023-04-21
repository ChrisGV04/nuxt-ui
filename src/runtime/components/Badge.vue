<script setup lang="ts">
import { computed, type PropType } from 'vue';

type BadgeColors = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';

interface BadgeElements {
  addons: string;
  flat: string;
  border: string;
  action: string;
}

const props = defineProps({
  dot: Boolean,
  pill: Boolean,
  flat: Boolean,
  small: Boolean,
  noBg: Boolean,
  color: { type: String as PropType<BadgeColors>, default: 'gray' },
});
defineEmits(['click:action']);

const DEFAULT_COLOR_VARIANTS: Record<BadgeColors, BadgeElements> = {
  blue: {
    addons: 'text-blue-500',
    action: 'hover:bg-blue-600/20',
    flat: 'bg-blue-100 text-blue-700',
    border: 'bg-blue-50 text-blue-700 ring-blue-700/10',
  },
  gray: {
    addons: 'text-gray-400',
    action: 'hover:bg-blue-500/20',
    flat: 'bg-gray-100 text-gray-600',
    border: 'bg-gray-50 text-gray-600 ring-gray-500/10',
  },
  green: {
    addons: 'text-emerald-500',
    action: 'hover:bg-green-600/20',
    flat: 'bg-emerald-100 text-emerald-700',
    border: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  },
  indigo: {
    addons: 'text-indigo-500',
    action: 'hover:bg-indigo-600/20',
    flat: 'bg-indigo-100 text-indigo-700',
    border: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
  },
  pink: {
    addons: 'text-pink-500',
    action: 'hover:bg-pink-600/20',
    flat: 'bg-pink-100 text-pink-700',
    border: 'bg-pink-50 text-pink-700 ring-pink-700/10',
  },
  purple: {
    addons: 'text-purple-500',
    action: 'hover:bg-purple-600/20',
    flat: 'bg-purple-100 text-purple-700',
    border: 'bg-purple-50 text-purple-700 ring-purple-700/10',
  },
  red: {
    addons: 'text-red-500',
    action: 'hover:bg-red-600/20',
    flat: 'bg-red-100 text-red-700',
    border: 'bg-red-50 text-red-700 ring-red-600/10',
  },
  yellow: {
    addons: 'text-yellow-500',
    action: 'hover:bg-yellow-600/20',
    flat: 'bg-yellow-100 text-yellow-800',
    border: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  },
};

const badgeColor = computed(() => {
  if (props.noBg) return 'ring-1 ring-inset ring-gray-200';
  else if (props.flat) return DEFAULT_COLOR_VARIANTS[props.color].flat;
  else return `${DEFAULT_COLOR_VARIANTS[props.color].border} ring-1 ring-inset`;
});
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-x-1.5 text-xs font-medium',
      pill ? 'rounded-full' : 'rounded-md',
      small ? 'px-1.5 py-0.5' : 'px-2 py-1',
      badgeColor,
    ]"
  >
    <svg
      v-if="dot"
      viewBox="0 0 6 6"
      aria-hidden="true"
      fill="currentColor"
      :class="['h-1.5 w-1.5', DEFAULT_COLOR_VARIANTS[color].addons]"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>

    <slot />

    <button
      type="button"
      v-if="$slots.action"
      @click="$emit('click:action')"
      :class="[
        DEFAULT_COLOR_VARIANTS[color].addons,
        DEFAULT_COLOR_VARIANTS[color].action,
        small ? '-mr-0.5' : '-mr-1',
        'flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm hover:bg-gray-900/5',
      ]"
    >
      <slot name="action" />
    </button>
  </span>
</template>
