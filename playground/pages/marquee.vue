<script setup lang="ts">
const marqueeWords = ['MARQUEE', 'COOL', 'YEAH'];
</script>

<template>
  <main>
    <UiMarquee :speed="120">
      <h4 class="text-primary-500 mr-8 text-[clamp(9rem,15vw,50vh)] leading-none">
        <template v-for="w in marqueeWords">{{ w }}{{ ' - ' }}</template>
      </h4>
    </UiMarquee>

    <UiMarquee :speed="80" reverse>
      <h4 class="text-primary-900 mr-8 text-[clamp(6rem,10vw,15vh)] leading-none">
        <template v-for="w in marqueeWords">{{ w }}{{ ' - ' }}</template>
      </h4>
    </UiMarquee>
  </main>
</template>
