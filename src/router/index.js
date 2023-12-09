import { createRouter, createWebHistory } from "vue-router";
import PageHome from "../pages/PageHome.vue";
import PageBlog from "../pages/PageBlog.vue";
import PageArticles from "../pages/PageArticles.vue";
import PageProject from "../pages/PageProject.vue";
import PageProjectDetails from "../pages/PageProjectDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/project",
    name: "project",
    component: PageProject,
  },
  {
    path: "/blog",
    name: "blog",
    component: PageBlog,
  },
  {
    path: "/articles",
    name: "articles",
    component: PageArticles,
  },
  {
    path: "/details",
    name: "details",
    component: PageProjectDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
