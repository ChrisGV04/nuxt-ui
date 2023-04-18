<script setup lang="ts">
function dismiss() {
  alert('Dismiss');
}
</script>

<template>
  <UiContainer class="max-w-2xl py-4">
    <div>
      <h1 class="text-2xl">Badges</h1>

      <div class="mt-4 flex items-center gap-4">
        <span class="text-sm text-gray-500">Normal</span>
        <UiBadge class="bg-primary-100 text-primary-800">Badge</UiBadge>
        <UiBadge size="lg" class="bg-primary-100 text-primary-800">Badge</UiBadge>
      </div>

      <div class="mt-4 flex items-center gap-4">
        <span class="text-sm text-gray-500">With dot</span>
        <UiBadge dot class="bg-primary-100 text-primary-800">Badge</UiBadge>
        <UiBadge dot size="lg" class="bg-primary-100 text-primary-800">Badge</UiBadge>
      </div>

      <div class="mt-4 flex items-center gap-4">
        <span class="text-sm text-gray-500">Rounded</span>
        <UiBadge rounded class="bg-primary-100 text-primary-800">Badge</UiBadge>
        <UiBadge rounded size="lg" class="bg-primary-100 text-primary-800">Badge</UiBadge>
      </div>

      <div class="mt-4 flex items-center gap-4">
        <span class="text-sm text-gray-500">With action</span>
        <UiBadge class="bg-primary-100 text-primary-800">
          Badge
          <template #action>
            <button @click="dismiss">
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark-20-solid" class="h-4 w-4" />
            </button>
          </template>
        </UiBadge>

        <UiBadge rounded size="lg" class="bg-primary-100 text-primary-800">
          Badge
          <template #action>
            <button @click="dismiss">
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark-20-solid" class="h-4 w-4" />
            </button>
          </template>
        </UiBadge>
      </div>
    </div>
  </UiContainer>
</template>
