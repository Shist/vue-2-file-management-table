import Vue from "vue";
import App from "@/App.vue";
import baseComponents from "@/components/base";
import "@/assets/styles/common.css";

Vue.config.productionTip = false;

Object.keys(baseComponents).forEach((name) => {
  Vue.component(name, baseComponents[name]);
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
