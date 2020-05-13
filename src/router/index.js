import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    meta: {
      title: "Welcome To xiangstan.github.io"
    }
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title;
  if (to.meta.title !== "Welcome To xiangstan.github.io") {
    title += " | xiangstan.github.io";
  }
  document.title = title;
  next()
})

export default router
