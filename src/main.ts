import { createSSRApp } from "vue";
import * as Pinia from 'pinia';
import { i18nPlugins } from "@/locale/index";
import App from "./App.vue";
import "uno.css";

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  app.use(i18nPlugins);

  return {
    app,
    Pinia,
    i18n: i18nPlugins,
  };
}
