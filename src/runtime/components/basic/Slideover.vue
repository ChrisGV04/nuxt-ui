<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

export interface SlideoverProps {
  show: boolean;
  noOverlay?: boolean;
  direction?: 'left' | 'right';
}

defineOptions({ inheritAttrs: false });
withDefaults(defineProps<SlideoverProps>(), { direction: 'left' });
defineEmits(['close', 'before-leave', 'after-leave', 'before-enter', 'after-enter']);
</script>

<template>
  <TransitionRoot as="template" :show="show" @after-leave="$emit('after-leave')">
    <Dialog as="div" class="relative z-30" @close="$emit('close')">
      <TransitionChild
        v-if="!noOverlay"
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/70 backdrop-blur-sm backdrop-filter transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            :class="[
              'pointer-events-none fixed inset-y-0 flex max-w-full',
              direction === 'left' ? 'left-0 pr-10' : 'right-0 pl-10',
            ]"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              :enter-from="direction === 'left' ? '-translate-x-full' : 'translate-x-full'"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              :leave-to="direction === 'left' ? '-translate-x-full' : 'translate-x-full'"
            >
              <DialogPanel v-bind="$attrs" class="pointer-events-auto w-screen">
                <slot />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
