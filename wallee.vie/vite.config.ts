import { defineConfig, loadEnv, preprocessCSS } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

import { Plugin } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Layout from "vite-plugin-vue-layouts";
import Pages, { PageResolver } from "vite-plugin-pages";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    plugins: [
      // have to
      vue(),
      // have to
      //vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      Pages({
        dirs: [
          {
            dir: "src/views",
            baseRoute: "",
          },
          {
            dir: "src/views/sys",
            baseRoute: "",
          },
        ],
        extensions: ["vue", "ts", "js"], //this is the default value
        moduleId: "~pages",
        extendRoute: (route, parent) => {
          return route;
        },
        onRoutesGenerated: (routes) => {
          return routes;
        },
        exclude: ["**/components/*"],
      }),
      Layout({
        defaultLayout: "home",
        layoutsDirs: ["src/layouts"],
        exclude: ["src/views/sys/oidc*.vue"],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "/@/styles/var.scss";`,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/",
        },
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/",
        },
      ],
    },
    server: {
      host: true,
      https: false,
      port: Number(env["VITE_PORT"]),
    },
  };
});
