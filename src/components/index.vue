<script setup>
import menuIndex from "@/hooks/menuIndex.vue";
import Examples from "@/hooks/examples.vue";

</script>

<template>
    <div class="relative h-full w-full rounded-b-3xl border-slate-700 bg-slate-800 p-2 border-[0.5px]">
        <menuIndex/>
        <div class="flex justify-center">
            <div class="mt-10 flex items-center justify-center gap-2 rounded-3xl bg-amber-300 p-2 px-6 text-slate-900 dark:bg-violet-700 dark:text-amber-50">
                <i-material-symbols-info/>
                centrame esto la concha de tu hermana / About This
            </div>
        </div>
        <div class="m-2 flex justify-center py-10">
            <div class="w-2/3 rounded-3xl p-2 text-slate-50">

                <p class="pb-8 text-center text-4xl text-amber-50 dark:text-purple-50">
                    This is a page for the Neña Pendeja / add text to later
                </p>
                <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, blanditiis consequatur cumque delectus deleniti
                    dignissimos doloremque ducimus ea fuga incidunt ipsam iusto minus neque nulla officiis quo repudiandae? Ab, molestias.
                </p>
            </div>
        </div>
    </div>
    <div class="m-2 flex justify-center py-10">
        <div class="w-2/3 rounded-3xl p-2 text-slate-50">
            <p class="pb-8 text-center text-4xl text-amber-50 dark:text-purple-50">
                And, this is more information
            </p>
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci commodi consequatur deleniti dolorum eius
                eos et incidunt itaque minus nihil omnis perferendis placeat praesentium, provident quam, quibusdam similique vero?Aliquam
                autem eius enim excepturi facilis ipsum mollitia nulla odio pariatur perferendis quaerat qui quod, quos reiciendis
                repudiandae sint soluta, temporibus unde vel voluptatum! Consequuntur enim ipsum molestias officiis quas?
            </p>
        </div>
    </div>
    <div class="my-10 flex justify-center bg-violet-800">
        <div class="container flex w-auto flex-wrap items-center justify-center gap-x-10 gap-y-6 p-10">
            <examples class="-rotate-3 hover:rotate-0"/>
            <examples class="rotate-6 hover:rotate-0"/>
            <examples class="-rotate-3 hover:rotate-0"/>
        </div>
    </div>
</template>
