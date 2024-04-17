import "@/style.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(VueCookies, { expireTimes: "1d" });
app.use(router);
app.mount("#app");
