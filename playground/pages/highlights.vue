<script setup lang="ts">
const demoText = 'Text with [highlighted] words as an example of a [functional component]';
</script>

<template>
  <UiContainer class="py-8">
    <UiHighlightText :text="demoText">
      <template #highlights="{ content }">
        <span class="text-primary-500 uppercase">{{ content }}</span>
      </template>
    </UiHighlightText>
  </UiContainer>
</template>
