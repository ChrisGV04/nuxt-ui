<script setup lang="ts">
function dismiss() {
  alert('Dismiss');
}
</script>

<template>
  <UiContainer class="max-w-2xl py-4">
    <div>
      <h1 class="text-2xl">Badges</h1>

      <div class="mt-4">
        <span class="text-sm font-medium text-gray-600">Normal</span>

        <div class="mt-2 flex items-center gap-4">
          <UiBadge color="gray">Badge</UiBadge>
          <UiBadge color="red">Badge</UiBadge>
          <UiBadge color="yellow">Badge</UiBadge>
          <UiBadge color="green">Badge</UiBadge>
          <UiBadge color="blue">Badge</UiBadge>
          <UiBadge color="indigo">Badge</UiBadge>
          <UiBadge color="purple">Badge</UiBadge>
          <UiBadge color="pink">Badge</UiBadge>
        </div>
      </div>

      <div class="mt-4">
        <span class="text-sm font-medium text-gray-600">Small</span>

        <div class="mt-2 flex items-center gap-4">
          <UiBadge small color="gray">Badge</UiBadge>
          <UiBadge small color="red">Badge</UiBadge>
          <UiBadge small color="yellow">Badge</UiBadge>
          <UiBadge small color="green">Badge</UiBadge>
          <UiBadge small color="blue">Badge</UiBadge>
          <UiBadge small color="indigo">Badge</UiBadge>
          <UiBadge small color="purple">Badge</UiBadge>
          <UiBadge small color="pink">Badge</UiBadge>
        </div>
      </div>

      <div class="mt-4">
        <span class="text-sm font-medium text-gray-600">With dot</span>

        <div class="mt-2 flex items-center gap-4">
          <UiBadge dot color="gray">Badge</UiBadge>
          <UiBadge dot color="red">Badge</UiBadge>
          <UiBadge dot color="yellow">Badge</UiBadge>
          <UiBadge dot color="green">Badge</UiBadge>
          <UiBadge dot color="blue">Badge</UiBadge>
          <UiBadge dot color="indigo">Badge</UiBadge>
          <UiBadge dot color="purple">Badge</UiBadge>
          <UiBadge dot color="pink">Badge</UiBadge>
        </div>
      </div>

      <div class="mt-4">
        <span class="text-sm font-medium text-gray-600">No background</span>

        <div class="mt-2 flex items-center gap-4">
          <UiBadge no-bg dot color="gray">Badge</UiBadge>
          <UiBadge no-bg dot color="red">Badge</UiBadge>
          <UiBadge no-bg dot color="yellow">Badge</UiBadge>
          <UiBadge no-bg dot color="green">Badge</UiBadge>
          <UiBadge no-bg dot color="blue">Badge</UiBadge>
          <UiBadge no-bg dot color="indigo">Badge</UiBadge>
          <UiBadge no-bg dot color="purple">Badge</UiBadge>
          <UiBadge no-bg dot color="pink">Badge</UiBadge>
        </div>
      </div>

      <div class="mt-4">
        <span class="text-sm font-medium text-gray-600">Pill</span>

        <div class="mt-2 flex items-center gap-4">
          <UiBadge pill color="gray">Badge</UiBadge>
          <UiBadge pill color="red">Badge</UiBadge>
          <UiBadge pill color="yellow">Badge</UiBadge>
          <UiBadge pill color="green">Badge</UiBadge>
          <UiBadge pill color="blue">Badge</UiBadge>
          <UiBadge pill color="indigo">Badge</UiBadge>
          <UiBadge pill color="purple">Badge</UiBadge>
          <UiBadge pill color="pink">Badge</UiBadge>
        </div>
      </div>

      <div class="mt-4">
        <span class="text-sm font-medium text-gray-600">Flat</span>

        <div class="mt-2 flex items-center gap-4">
          <UiBadge flat color="gray">Badge</UiBadge>
          <UiBadge flat color="red">Badge</UiBadge>
          <UiBadge flat color="yellow">Badge</UiBadge>
          <UiBadge flat color="green">Badge</UiBadge>
          <UiBadge flat color="blue">Badge</UiBadge>
          <UiBadge flat color="indigo">Badge</UiBadge>
          <UiBadge flat color="purple">Badge</UiBadge>
          <UiBadge flat color="pink">Badge</UiBadge>
        </div>
      </div>

      <div class="mt-4">
        <span class="text-sm font-medium text-gray-600">Action</span>

        <div class="mt-2 flex items-center gap-4">
          <UiBadge small @click:action="dismiss" color="gray">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
          <UiBadge @click:action="dismiss" color="red">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
          <UiBadge @click:action="dismiss" color="yellow">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
          <UiBadge @click:action="dismiss" color="green">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
          <UiBadge @click:action="dismiss" color="blue">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
          <UiBadge @click:action="dismiss" color="indigo">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
          <UiBadge @click:action="dismiss" color="purple">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
          <UiBadge @click:action="dismiss" color="pink">
            Badge

            <template #action>
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" />
            </template>
          </UiBadge>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
