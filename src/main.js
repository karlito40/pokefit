import { createApp } from "vue";
// import { Capacitor } from "@capacitor/core";
// import { StatusBar, Style } from "@capacitor/status-bar";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// setupMobile();

const app = setupApp();
app.mount("#app");

// function setupMobile() {
//   if (Capacitor.isPluginAvailable("StatusBar")) {
//     StatusBar.setOverlaysWebView({ overlay: true });
//     StatusBar.setStyle({ style: Style.Light });
//   }
// }

function setupApp() {
  const app = createApp(App);

  app.use(router);

  return app;
}
