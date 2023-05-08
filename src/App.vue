<script setup>
import index from "@/components/index.vue"
</script>

<template>
	<header>
		<index/>
	</header>
</template>
<style>
html.dark {
	color-scheme: dark;
}

body {
	@apply bg-slate-50 text-slate-950 dark:bg-indigo-950 dark:text-slate-50
}
</style>