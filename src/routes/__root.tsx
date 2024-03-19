import { Outlet, createRootRoute } from '@tanstack/react-router';
import { NotFound } from 'src/pages';

// https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#the-root-route
export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => {
    return <NotFound />;
  },
});
