<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template class="bg-violet-600 dark:shadow-indigo-700">
	<div class="flex justify-center items-center flex-col">
		<button
			class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 dark:bg-blue-800 dark:hover:bg-indigo-900 mt-4 text-blue-50 rounded-lg p-2 m-2"
			@click="toggleDark()">
			Active {{ isDark ? "Light" : "Dark " }} Mode
		</button>
		<div class="bg-violet-600 p-4 hover:bg-blue-600 dark:hover:bg-blue-950 font-bold text-amber-50 m-2 rounded-md">
			<h1 class="text-2xl">
				Hello World, Fuck You!
			</h1>
			<div class="text-center text-amber-300">
				<h1>
					The mode is {{ isDark ? "Dark" : "Light" }}
				</h1>
			</div>
		</div>
		<div
			class="m-2 rounded-md  bg-violet-500 hover:bg-amber-400 p-2 shadow-indigo-700 dark:bg-gray-800 dark:hover:bg-fuchsia-400">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Vue 3 dark Mode With Tailwind CSS
			</h5>
			<p class="font-normal text-gray-700 dark:text-gray-400">
				install & setup vue 3 dark mode in vue 3 using tailwind css 3
			</p>
		</div>
		<!--        Prueba Card-->
		<div class="max-w-sm overflow-hidden rounded-lg shadow-lg m-6 w-96 dark:bg-indigo-900">
			<img src="https://images3.alphacoders.com/108/1082567.jpg" alt="xd" class="w-full">
			<div class="m-4 text-slate-900 dark:text-gray-100">
				<p class="font-semibold text-2xl">
					The Coldest Sunset
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus architecto tempore cumque
					enim ut obcaecati labore officia, possimus distinctio non minima vel provident? Eos impedit a vitae.
					Voluptate, deleniti.
				</p>
				<div class="flex mt-4">
					<p class="bg-slate-300 font-semibold rounded-full p-1 px-2 mx-2 dark:text-slate-950">#photografy</p>
					<p class="bg-slate-300 font-semibold rounded-full p-1 px-2 mx-2 dark:text-slate-950">#travel</p>
					<p class="bg-slate-300 font-semibold rounded-full p-1 px-2 mx-2 dark:text-slate-950">#winter</p>
				</div>
			</div>
		</div>
	</div>
</template>