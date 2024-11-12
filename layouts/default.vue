<script setup lang="ts">
import NavBar from '~/components/NavBar.vue';
</script>
<template>
	<div w-screen h-screen h-100dvh>
		<NavBar />
		<slot />
	</div>
</template>