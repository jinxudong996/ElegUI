import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "组件库",
  description: "A VitePress Site",
  vite: {
    base: "/ElegUI/",
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "组件", link: "/components/button" },
      // { text: "Test", link: "/markdown-examples" },
    ],

    sidebar: [
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //     { text: "Test here", link: "/api-examples" },
      //   ],
      // },
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
