import { RouterProvider, createRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
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

  interface StaticDataRouteOption {
    key?: string;
  }
}

export function RouteProvider() {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools
        // https://tanstack.com/router/latest/docs/framework/react/devtools
        router={router}
        position='bottom-right'
      />
    </>
  );
}
