import type { RouterConfig } from "@nuxt/schema";

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: () => [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/about"),
    },
    {
      path: "/policy",
      name: "policy",
      component: () => import("@/pages/policy"),
    },
    {
      path: "/works",
      name: "works",
      component: () => import("@/pages/works"),
    },
    {
      path: "/posts/:id",
      component: () => import("@/pages/post-details"),
    },
    // Nothing matched, Custom Page?
    // {
    //   path: "/:catchAll(.*)*",
    //   component: () => import("@/pages/custom"),
    // },
  ],
} satisfies RouterConfig;
