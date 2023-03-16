// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/WorkSpace/wallee.vie/wallee.vie/node_modules/.pnpm/vite@4.0.2_gneikmxcpj2uc2xuqjosnroj4e/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///D:/WorkSpace/wallee.vie/wallee.vie/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.2+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/WorkSpace/wallee.vie/wallee.vie/node_modules/.pnpm/unplugin-auto-import@0.13.0_@vueuse+core@9.8.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/WorkSpace/wallee.vie/wallee.vie/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/WorkSpace/wallee.vie/wallee.vie/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Layout from "file:///D:/WorkSpace/wallee.vie/wallee.vie/node_modules/.pnpm/vite-plugin-vue-layouts@0.7.0_jv2z4nfib4yzuruot6gfjyfuka/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Pages from "file:///D:/WorkSpace/wallee.vie/wallee.vie/node_modules/.pnpm/vite-plugin-pages@0.28.0_vite@4.0.2/node_modules/vite-plugin-pages/dist/index.mjs";
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}
var vite_config_default = defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      Pages({
        dirs: [
          {
            dir: "src/views",
            baseRoute: ""
          },
          {
            dir: "src/views/sys",
            baseRoute: ""
          }
        ],
        extensions: ["vue", "ts", "js"],
        moduleId: "~pages",
        extendRoute: (route, parent) => {
          return route;
        },
        onRoutesGenerated: (routes) => {
          return routes;
        },
        exclude: ["**/components/*"]
      }),
      Layout({
        defaultLayout: "home",
        layoutsDirs: ["src/layouts"],
        exclude: ["src/views/sys/oidc*.vue"]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "/@/styles/var.scss";`
        }
      }
    },
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/"
        },
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/"
        }
      ]
    },
    server: {
      host: true,
      https: false,
      port: Number(env["VITE_PORT"])
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrU3BhY2VcXFxcd2FsbGVlLnZpZVxcXFx3YWxsZWUudmllXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXb3JrU3BhY2VcXFxcd2FsbGVlLnZpZVxcXFx3YWxsZWUudmllXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Xb3JrU3BhY2Uvd2FsbGVlLnZpZS93YWxsZWUudmllL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52LCBwcmVwcm9jZXNzQ1NTIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5cclxuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWxheW91dHNcIjtcclxuaW1wb3J0IFBhZ2VzLCB7IFBhZ2VSZXNvbHZlciB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wYWdlc1wiO1xyXG5cclxuZnVuY3Rpb24gcGF0aFJlc29sdmUoZGlyOiBzdHJpbmcpIHtcclxuICByZXR1cm4gcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcIi5cIiwgZGlyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xyXG4gIGxldCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksIFwiXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBiYXNlOiBcIi4vXCIsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIC8vIGhhdmUgdG9cclxuICAgICAgdnVlKCksXHJcbiAgICAgIC8vIGhhdmUgdG9cclxuICAgICAgLy92dWVKc3goKSxcclxuICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcclxuICAgICAgfSksXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBQYWdlcyh7XHJcbiAgICAgICAgZGlyczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkaXI6IFwic3JjL3ZpZXdzXCIsXHJcbiAgICAgICAgICAgIGJhc2VSb3V0ZTogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcjogXCJzcmMvdmlld3Mvc3lzXCIsXHJcbiAgICAgICAgICAgIGJhc2VSb3V0ZTogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBleHRlbnNpb25zOiBbXCJ2dWVcIiwgXCJ0c1wiLCBcImpzXCJdLCAvL3RoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWVcclxuICAgICAgICBtb2R1bGVJZDogXCJ+cGFnZXNcIixcclxuICAgICAgICBleHRlbmRSb3V0ZTogKHJvdXRlLCBwYXJlbnQpID0+IHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUm91dGVzR2VuZXJhdGVkOiAocm91dGVzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVkZTogW1wiKiovY29tcG9uZW50cy8qXCJdLFxyXG4gICAgICB9KSxcclxuICAgICAgTGF5b3V0KHtcclxuICAgICAgICBkZWZhdWx0TGF5b3V0OiBcImhvbWVcIixcclxuICAgICAgICBsYXlvdXRzRGlyczogW1wic3JjL2xheW91dHNcIl0sXHJcbiAgICAgICAgZXhjbHVkZTogW1wic3JjL3ZpZXdzL3N5cy9vaWRjKi52dWVcIl0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGNzczoge1xyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiL0Avc3R5bGVzL3Zhci5zY3NzXCI7YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaW5kOiAvXFwvQFxcLy8sXHJcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aFJlc29sdmUoXCJzcmNcIikgKyBcIi9cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpbmQ6IC9cXC8jXFwvLyxcclxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoUmVzb2x2ZShcInR5cGVzXCIpICsgXCIvXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgaHR0cHM6IGZhbHNlLFxyXG4gICAgICBwb3J0OiBOdW1iZXIoZW52W1wiVklURV9QT1JUXCJdKSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1MsU0FBUyxjQUFjLGVBQThCO0FBQ3JWLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFHaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBNkI7QUFFcEMsU0FBUyxZQUFZLEtBQWE7QUFDaEMsU0FBTyxRQUFRLFFBQVEsSUFBSSxHQUFHLEtBQUssR0FBRztBQUN4QztBQUVBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFDakQsTUFBSSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQ3pDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUVQLElBQUk7QUFBQSxNQUdKLFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELE1BQU07QUFBQSxRQUNKLE1BQU07QUFBQSxVQUNKO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxXQUFXO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLFdBQVc7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLFFBQ0EsWUFBWSxDQUFDLE9BQU8sTUFBTSxJQUFJO0FBQUEsUUFDOUIsVUFBVTtBQUFBLFFBQ1YsYUFBYSxDQUFDLE9BQU8sV0FBVztBQUM5QixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBLG1CQUFtQixDQUFDLFdBQVc7QUFDN0IsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxTQUFTLENBQUMsaUJBQWlCO0FBQUEsTUFDN0IsQ0FBQztBQUFBLE1BQ0QsT0FBTztBQUFBLFFBQ0wsZUFBZTtBQUFBLFFBQ2YsYUFBYSxDQUFDLGFBQWE7QUFBQSxRQUMzQixTQUFTLENBQUMseUJBQXlCO0FBQUEsTUFDckMsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhLFlBQVksS0FBSyxJQUFJO0FBQUEsUUFDcEM7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhLFlBQVksT0FBTyxJQUFJO0FBQUEsUUFDdEM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsTUFBTSxPQUFPLElBQUksWUFBWTtBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
