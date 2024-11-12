<script setup lang="ts">

const { x, y } = useMouse();
const c = useColorMode()

</script>
<template>
	<div>
		<h1>Home</h1>
		<span>Mouse position: {{ x }}, {{ y }}</span>
	</div>
</template>