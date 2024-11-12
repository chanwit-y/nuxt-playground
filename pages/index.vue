<script setup lang="ts">
// import Flow from '~/components/Flow.vue'

const { x, y } = useMouse()
const color = useColorMode()

function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div grid grid-cols-2 h-full>
    <div border-r border-base>
      Col 1

      <div text-red>
        <p>Mouse position: {{ x }}, {{ y }}</p>
        <button @click="toggleDark">
          {{ color.value }}
        </button>
      </div>
    </div>
    <div>Col 2</div>
  </div>
</template>
