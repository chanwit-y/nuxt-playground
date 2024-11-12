<script setup lang="ts">
// import Flow from '~/components/Flow.vue'

const { x, y } = useMouse()
const color = useColorMode()

function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div grid="~ cols-[1fr_2fr]" h-full >
    <div border="r base" p4>
      Content

      <div text-red>
        <p>Mouse position: {{ x }}, {{ y }}</p>
        <button @click="toggleDark">
          {{ color.value }}
        </button>
      </div>
    </div>
    <div p4>
      Playground
    </div>
  </div>
</template>
