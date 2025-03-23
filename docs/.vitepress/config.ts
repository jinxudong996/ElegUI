import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

export default defineConfig({
  title: "组件库",
  description: "A VitePress Site",
  base: "/ElegUI/", // 设置基础路径
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "组件", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "Basic",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Collapse", link: "/components/Collapse" },
          { text: "Tooltip", link: "/components/Tooltip" },
          { text: "Dropdown", link: "/components/Dropdown" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/jinxudong996/ElegUI" },
    ],
  },
});
