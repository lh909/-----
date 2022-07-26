import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Login from "@/views/Login.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "login",
  //   component: ()=>import("@/views/Notice"),
  // },
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home"),
  },
  // 个人预约
  {
    path: "/PersonalAppointment",
    name: "PersonalAppointment",
    component: () => import("@/views/PersonalAppointment"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;
