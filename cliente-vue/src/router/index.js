import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { useAuthStore } from "../stores/auth";
import Cookies from "js-cookie";

const authorized = (to, from, next) => {
  
  const auth = useAuthStore();
  console.log(auth.isAuthenticated);

  if (auth.isAuthenticated != '') {
    // console.log(Cookies.get("Token"));
    next();
  } else {
    next("/login");
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      // beforeEnter: auth
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/DashboardView.vue"),
      beforeEnter: authorized,
    },
        {
          path: "/dashboard/proyectos",
          name: "dashboard-proyectos",
          component: () => import("../views/dashboard/ProyectosView.vue"),
          beforeEnter: authorized
        },
        {
          path: "/dashboard/panel",
          name: "dashboard-panel",
          component: () => import("../views/dashboard/PanelView.vue"),
          beforeEnter: authorized
        },
        {
          path: "/dashboard/colaboradores",
          name: "dashboard-colaboradores",
          component: () => import("../views/dashboard/ColaboradoresView.vue"),
          beforeEnter: authorized
        },
        {
          path: "/dashboard/clientes",
          name: "dashboard-clientes",
          component: () => import("../views/dashboard/ClienteView.vue"),
          beforeEnter: authorized
        },
        {
          path: "/dashboard/clientes/proyectos/:id",
          name: "dashboard-clientes-proyectos",
          component: () => import("../views/dashboard/proyectos/ProyectosClienteView.vue"),
          beforeEnter: authorized
        },


        
        {
          path: "/dashboard/newproyect",
          name: "dashboard-newproyect",
          component: () => import("../views/dashboard/NewProyectView.vue"),
          beforeEnter: authorized
        },
        {
          path: "/dashboard/perfil",
          name: "dashboard-perfil",
          component: () => import("../views/dashboard/PerfilView.vue"),
          beforeEnter: authorized
        },
        {
          path: "/dashboard/settings",
          name: "dashboard-settings",
          component: () => import("../views/dashboard/SettingsView.vue"),
          beforeEnter: authorized
        },
      ]
});



// const protectedRoutes = {

// }

export default router;
