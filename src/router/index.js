import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    // 个性推荐
    {
      path: "/",
      name: "Recommend",
      component: () => import("../views/recommend/index.vue")
    }
  ]
});
