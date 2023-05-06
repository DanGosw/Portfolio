<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
    <div class="flex justify-center items-center h-screen flex-col">
        <div>
            <button class=" bg-indigo-500  dark:bg-gray-500 text-blue-50 rounded-lg p-2 m-2" @click="toggleDark()">
                Active {{ isDark ? "Light" : "Dark " }} Mode
            </button>
        </div>
        <div class="bg-violet-600 p-4 font-bold text-amber-50 m-2 rounded-md">
            <h1>
                Hello World, Fuck You!
            </h1>
            <h1>
                The mode is: {{ isDark ? "Dark " : "Light" }} Mode
            </h1>
        </div>
        <div class="m-2">
            <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Vue 3 dark Mode With Tailwind CSS
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    install & setup vue 3 dark mode in vue 3 using tailwind css 3
                </p>
            </a>
        </div>
        <div class="bg-white m-2 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl shadow-indigo-700">
            <div>
            <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     aria-hidden="true">
                </svg>
            </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
        </div>
    </div>
</template>