<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({ disableTransition: false });
const toggleDark = useToggle(isDark);
</script>

<template>
    <div class="flex h-screen items-center justify-center">
        <div class="w-72">
            <div class="rounded-lg bg-white px-6 py-8 shadow-xl dark:bg-slate-800">
                <button @click="toggleDark()"
                        class="my-2 flex h-10 w-full items-center justify-center rounded-lg bg-violet-700 text-white">
                    <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
                </button>
                <div class="flex justify-center">
                    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                      </svg>
                    </span>
                </div>
                <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">Writes Upside-Down</h3>
                <p class="text-xl tracking-tightest font-bold
              bg-clip-text text-transparent block bg-gradient-to-r from-purple-600 via-green-500 to-red-500
              dark:bg-gradient-to-r dark:from-purple-600 dark:via-green-400 dark:to-red-600">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>
        </div>
    </div>

</template>
