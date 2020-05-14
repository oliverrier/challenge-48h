import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home"),
    },
    {
      path: "/map",
      name: "map",
      component: () => import("./components/Map"),
    },
    {
      path: "/station",
      name: "station",
      component: () => import("./components/Station"),
    },
  ]
});