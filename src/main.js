import Vue from "vue";
import App from "./App";
import "./static/css/reset.css";
import "./static/js/reset";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
