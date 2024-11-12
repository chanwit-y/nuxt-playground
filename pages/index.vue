<script setup lang="ts">
// import Flow from '~/components/Flow.vue'

const { x, y } = useMouse();
const color = useColorMode()

const toggleDark = () => {
	color.value = color.value === 'dark' ? 'light' : 'dark'
}

</script>
<template>
	<div text-red>
		<p>Mouse position: {{ x }}, {{ y }}</p>
		<button @click="toggleDark">{{ color.value }}</button>
	</div>
</template>