import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import GalleryView from "@/views/GalleryView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ContactView from "@/views/ContactView.vue";
import Errorview from "@/views/Errorview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: GalleryView,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Errorview,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  console.log(to);
  console.log(from);
  document.title = `${to.name}`;
  next()
})

export default router;
