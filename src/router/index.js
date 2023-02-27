import { routes } from "./routes";
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";

export const Router = createRouter({
  history: createWebHistory(),
  routes,
});
Router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isBrowserLogin = localStorage.getItem("isLogin");
  console.log("auth", authStore.isLogin);
  // check if auth required
  if (to.meta.requiresAuth) {
    // check if login
    if (authStore.isLogin || isBrowserLogin) {
      next();
      return;
    }
    // not login then redirect to login page
    next("/login");
  } else {
    // not auth required then bypass
    next();
  }
});
