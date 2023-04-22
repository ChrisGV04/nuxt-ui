<script setup lang="ts">
const topWords = ['MARQUEE', 'COOL'];
const bottomWords = ['PAUSABLE', 'REVERSIBLE', 'SPEED', 'NUXT'];
</script>

<template>
  <main>
    <UiMarquee :speed="120">
      <h4 class="text-primary-500 mr-8 text-[clamp(9rem,15vw,50vh)] leading-none">
        <template v-for="w in topWords">{{ w }}{{ ' - ' }}</template>
      </h4>
    </UiMarquee>

    <UiMarquee :speed="50" reverse>
      <h4 class="text-primary-900 mr-8 text-[clamp(6rem,10vw,15vh)] leading-none">
        <template v-for="w in bottomWords">{{ w }}{{ ' - ' }}</template>
      </h4>
    </UiMarquee>

    <div
      class="bg-primary-100 border-primary-900/10 text-primary-800 mt-8 h-screen rounded-md border p-4 text-center"
    >
      <span>Space to test pausing when not visible</span>
    </div>
  </main>
</template>
