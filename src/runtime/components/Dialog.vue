<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

defineProps({ show: Boolean });
defineEmits(['close', 'before-leave', 'after-leave', 'before-enter', 'after-enter']);
</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ inheritAttrs: false });
</script>

<template>
  <TransitionRoot as="template" :show="show" @after-leave="$emit('after-leave')">
    <Dialog as="div" class="relative z-30" @close="$emit('close')">
      <TransitionChild
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

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="transition-[opacity,transform] ease-out duration-300"
            leave="transition-[opacity,transform] ease-in duration-200"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel v-bind="$attrs" class="relative transform overflow-hidden sm:my-8">
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
