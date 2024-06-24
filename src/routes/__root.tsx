import { createRootRoute } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import { NotFound } from 'src/pages';

// https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#the-root-route
export const Route = createRootRoute({
  component: () => (
    <div
      style={{
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
        height: '100%',
      }}
    >
      <Outlet />
    </div>
  ),
  notFoundComponent: () => {
    return <NotFound />;
  },
});
