<script setup lang="ts">
const marqueeWords = ['MARQUEE', 'COOL', 'YEAH'];
</script>

<template>
  <UiMarquee :speed="200" reverse>
    <h4 class="text-primary-500 mr-8 text-[clamp(9rem,15vw,50vh)] leading-none">
      <template v-for="w in marqueeWords">{{ w }}{{ ' - ' }}</template>
    </h4>
  </UiMarquee>
</template>
