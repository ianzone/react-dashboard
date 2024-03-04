import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from '../routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
