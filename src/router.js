import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ContactDetail from "./views/ContactDetail.vue";
import Kanan from "./components/Kanan.vue";
import Penawaran from "./components/Penawaran.vue";
import Kiri from "./components/Kiri.vue";
import Scoreboard from "./views/Scoreboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: "/", name: "contactDetail", component: ContactDetail},
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {path: "/kanan", name: "kanan", component: Kanan},
    {path: "/Penawaran", name: "penawaran", component: Penawaran},
    {path: "/kiri", name: "kiri", component: Kiri},
    {path: "/scoreboard", name:"scoreboard", component:  Scoreboard},
  ]
});
