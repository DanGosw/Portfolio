import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import VueRouter from "unplugin-vue-router/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver, VueUseComponentsResolver, VueUseDirectiveResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
	plugins: [
		VueRouter(),
		Vue(),
		Icons({ compiler: "vue3", autoInstall: true }),
		Components({ resolvers: [IconsResolver(), NaiveUiResolver(), VueUseComponentsResolver(), VueUseDirectiveResolver()] }),
		AutoImport({
			dirs: ["./src/**"],
			imports: [
				"vue",
				"vue-router",
				{
					"vue-router": ["createRouter", "createWebHistory", "useRoute", "RouterLink"],
					"vue/server-renderer": ["renderToString"],
					"@vueuse/core": ["watchDebounced", "useDebounceFn", "useWindowSize", "useElementSize"],
					"@vueuse/integrations/useCookies": ["useCookies"],
					"vue-cookies": [["default", "VueCookies"]],
					"date-fns/format": [["default", "format"]],
					"naive-ui": ["useDialog", "useMessage", "createDiscreteApi"]
				}
			],
			include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
			resolvers: [
				IconsResolver({ prefix: "Icon" }),
				NaiveUiResolver(),
				VueUseComponentsResolver(),
				VueUseDirectiveResolver()
			],
			dts: true
		})
	],
	server: { host: true, port: 4000 },
	resolve: { alias: { "@": path.resolve(__dirname, "./src") } }
});
