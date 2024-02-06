import { createRouter, createWebHistory } from "vue-router";
import PageHome from "../pages/PageHome.vue";
import PageBlog from "../pages/PageBlog.vue";
import PageArticles from "../pages/PageArticles.vue";
import PageProject from "../pages/PageProject.vue";
import PageProjectDetails from "../pages/PageProjectDetails.vue";
import NotFound from "../pages/NotFound.vue";

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
  {
    path: "/:pathMatch(.*)",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
