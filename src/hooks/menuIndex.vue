<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({ disableTransition: false });
const toggleDark = useToggle(isDark);
const isDropdownOpen = ref(false);
const optionsMenu = [
	{ name: "Home", icon: IconMaterialSymbolsHomeRounded, path: "/" },
	{ name: "Gallery", icon: IconMaterialSymbolsGalleryThumbnail, path: "/gallery" },
	{ name: "About Me", icon: IconMaterialSymbolsInfo, path: "/about" }
];

const iconClasses = "h-6 w-6 text-slate-950 rounded-lg dark:text-amber-50 sm:block";
const menuItemClasses = "m-0.5 flex items-center rounded-lg hover:bg-amber-300 p-2 text-xl hover:cursor-pointer min-h-[43px]";
</script>

<template>
    <div class="m-2 flex h-20 w-auto items-center justify-between rounded-2xl bg-violet-50 shadow p-2 dark:bg-slate-900 border-[0.5px] border-slate-700">
        <img src="../assets/melissa.jpg" alt="image melissa" class="h-16 w-16 flex-shrink-0 rounded-full"/>
        <div class="flex items-center">
            <div v-for="option in optionsMenu" :key="option.name" :class="menuItemClasses + ' hidden sm:flex'">
                <component :is="option.icon" :class="iconClasses"/>
                <p class="hidden pl-1 text-slate-950 dark:text-amber-50 sm:block">{{ option.name }}</p>
            </div>
            <div class="flex sm:hidden w-full">
                <div class="relative inline-block">
                    <button @click="isDropdownOpen = !isDropdownOpen" class="rounded p-2">
                        <i-mdi-dots-vertical :class="iconClasses"/>
                    </button>
                    <div v-if="isDropdownOpen"
                         class="absolute left-0 z-10 mt-1 w-full min-w-max rounded-lg border border-purple-800 dark:border-slate-600 bg-slate-100 shadow-md dark:bg-slate-800">
                        <div v-for="option in optionsMenu" :key="option.name" @click="isDropdownOpen = !isDropdownOpen"
                             class="flex cursor-pointer rounded-lg bg-slate-100 px-4 py-2 text-base text-gray-800 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-gray-700">
                            <component :is="option.icon" :class="iconClasses"/>
                            <p class="pl-1 text-slate-950 dark:text-amber-50">{{ option.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <a :class="menuItemClasses" href="https://github.com/DanGosw/Portfolio" target="_blank">
                <i-mdi-github-box :class="iconClasses"/>
            </a>
            <div :class="menuItemClasses" @click="toggleDark()">
                <template v-if="isDark">
                    <i-ph-moon-stars :class="iconClasses"/>
                </template>
                <template v-else>
                    <i-material-symbols-light-mode-rounded :class="iconClasses"/>
                </template>
            </div>
        </div>
    </div>
</template>