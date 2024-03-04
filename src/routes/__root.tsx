import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { NotFound } from 'src/pages';

// https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#the-root-route
// https://tanstack.com/router/latest/docs/framework/react/devtools
export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => {
    return <NotFound />;
  },
});
