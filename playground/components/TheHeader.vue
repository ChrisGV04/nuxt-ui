<template>
  <header class="border-b border-gray-900/10 bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/">
          <span class="text-lg font-semibold text-gray-900">Nuxt UI</span>
        </NuxtLink>
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <template v-for="item in navigation">
          <NuxtLink
            v-if="item.route"
            :to="item.route"
            class="text-sm font-semibold leading-6 text-gray-900"
            >{{ item.name }}</NuxtLink
          >

          <Popover v-if="item.children" class="relative" v-slot="{ close }">
            <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              {{ item.name }}
              <Icon name="heroicons:chevron-down-20-solid" class="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5"
              >
                <NuxtLink
                  :key="child.name"
                  :to="child.route"
                  v-for="child in item.children"
                  @click="close"
                  class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >{{ child.name }}</NuxtLink
                >
              </PopoverPanel>
            </Transition>
          </Popover>
        </template>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import { ref } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

interface NavigationItem {
  name: string;
  route?: RouteLocationRaw;
  children?: Omit<NavigationItem, 'children'>[];
}

const navigation: NavigationItem[] = [
  {
    name: 'Basic',
    children: [
      { name: 'Badge', route: '/badge' },
      { name: 'Tooltip', route: '/tooltip' },
      { name: 'Dialog', route: '/dialog' },
      { name: 'Slideover', route: '/slideover' },
    ],
  },
  {
    name: 'Functional',
    children: [{ name: 'Highlights', route: '/highlights' }],
  },
  {
    name: 'Other',
    children: [{ name: 'Breakpoints', route: '/breakpoints' }],
  },
];

const mobileMenuOpen = ref(false);
</script>
