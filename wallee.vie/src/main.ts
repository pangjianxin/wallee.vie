import "/@/styles/app.scss";
import "/@/styles/reset.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/es/components/notification/style/css";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";
import VueCookies from "vue-cookies";

let app = createApp(App);
setupStore(app);
setupRouter(app);
//useEcharts(app);
app.use(VueCookies);
//element plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
