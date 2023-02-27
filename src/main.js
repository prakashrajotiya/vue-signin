import { createApp } from "vue";
import { createPinia } from "pinia";
import { Router } from "../src/router/index";

// import Vuelidate from "vuelidate";
import "./css/app.scss";
import "./app.css";
import App from "./App.vue";
import mitt from "mitt";
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(Router);
// app.use(Vuelidate);
const pinia = createPinia();
app.use(pinia);
app.mount("#app");
