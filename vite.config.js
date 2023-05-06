import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import VueRouter from "unplugin-vue-router/vite";
import IconResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver, VueUseComponentsResolver, VueUseDirectiveResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue(),
    Icons({ compiler: "vue3", autoInstall: true }),
    Components({
      resolvers: [IconResolver(), NaiveUiResolver(), VueUseComponentsResolver(), VueUseDirectiveResolver()],
    }),
  ],
  server: {
    host: "192.168.18.127",
    port: 4000,
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
