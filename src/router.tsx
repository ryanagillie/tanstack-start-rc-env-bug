import { createRouter } from "@tanstack/react-router";

import { routeTree } from "~/routeTree.gen";

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultStructuralSharing: true,
    scrollRestoration: true,
    scrollRestorationBehavior: "smooth",
  })

  return router;
}
