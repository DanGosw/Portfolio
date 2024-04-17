<script setup>
import menuIndex from "@/hooks/menuIndex.vue";
import Examples from "@/hooks/examples.vue";

</script>

<template>
    <div class="w-full p-2 h-full">
        <menuIndex/>
        <!--        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; background-color: #26272a; margin: 10px;">-->
        <div class="grid grid-cols-auto gap-4 bg-slate-600 m-2 rounded-lg border border-slate-300">
            <examples/>
            <examples/>
        </div>
    </div>
    <!--    </div>-->
</template>
