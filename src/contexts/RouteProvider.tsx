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
    order?: number;
    label?: string;
    icon?: JSX.Element;
  }
}

// https://tanstack.com/router/latest/docs/framework/react/devtools
export const RouteProvider = () => {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
};
