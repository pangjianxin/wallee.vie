import { App } from "vue";
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";
import useTagsStore from "/@/store/modules/useTagsStore";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";
import { showError } from "/@/utils/app";
import useOidcStore from "/@/store/modules/useoidcStore";

export const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  const { isTokenValid } = useOidcStore();
  if (!isTokenValid && to.path != "/sys/login" && to.meta?.requiredAuth) {
    showError("您访问的页面需要授权，现已转到登录页面");
    next("/login");
  } else {
    patchTabs(to);
    next();
  }
});
/**添加tabs缓存 */
function patchTabs(route: RouteLocationNormalized) {
  if (route.meta.keepAlive) {
    const tagsStore = useTagsStore();
    tagsStore.addItem({
      title: route.meta?.title as string,
      componentName: route.name as string,
      path: route.path,
    });
  }
}

export function setupRouter(app: App) {
  app.use(router);
}
