import { createApp } from "vue";
// import { Capacitor } from "@capacitor/core";
// import { StatusBar, Style } from "@capacitor/status-bar";
import App from "./App.vue";
import router from "./router";
import * as PushNotifications from "./libs/notifications";

import "./assets/main.css";

setupMobile();

const app = setupApp();
app.mount("#app");

async function setupMobile() {
  // if (Capacitor.isPluginAvailable("StatusBar")) {
  //   StatusBar.setOverlaysWebView({ overlay: true });
  //   StatusBar.setStyle({ style: Style.Light });
  // }

  if (Capacitor.isPluginAvailable("PushNotifications")) {
    await PushNotifications.registerNotifications();
    await PushNotifications.addListeners();
    await PushNotifications.getDeliveredNotifications();
  } else {
    console.log("PushNotifications not available");
  }
}

function setupApp() {
  const app = createApp(App);

  app.use(router);

  return app;
}
