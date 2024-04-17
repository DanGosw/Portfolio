import index from "../components/index.vue";
import menu from "@/hooks/menuIndex.vue";

const routes = [
	{ path: "/", component: index },
	{ path: "/about", component: index },
	{ path: "/xd", component: menu },
	{
		path: "/:catchAll(.*)",
		name: "Page not found",
		"beforeEnter": (to, from, next) => { next({ path: "/" }); }
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;