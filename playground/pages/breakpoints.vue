<script setup lang="ts"></script>

<template>
  <UiContainer class="py-4">
    <div>
      <h1 class="text-2xl">Breakpoint viewer</h1>
      <p class="text-gray-500">It should be on the bottom right corner</p>
    </div>

    <DevOnly>
      <ClientOnly>
        <UiBreakpointViewer />
      </ClientOnly>
    </DevOnly>
  </UiContainer>
</template>
