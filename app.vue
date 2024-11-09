<script setup lang="ts">
import Flow from './components/Flow.vue'
</script>

<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <Flow />
  </ClientOnly>
</template>
