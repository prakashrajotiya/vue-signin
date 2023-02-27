export const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue"),
    meta: {
      requiresAuth: true,
      Title: "Dashboard",
    },
  },
  {
    path: "/about",
    component: () => import("../pages/AboutPage.vue"),
    meta: {
      requiresAuth: true,
      Title: "About Us",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/LoginPage.vue"),
    meta: {
      Title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      Title: "Register",
    },
    component: () => import("../pages/RegisterPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/NotFound.vue"),
    meta: {
      Title: "Not Found",
    },
  },
];
