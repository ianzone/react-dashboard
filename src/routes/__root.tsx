import { createRootRoute } from '@tanstack/react-router';
import { RootLayout } from 'src/layouts';
import { NotFound } from 'src/pages';

// https://tanstack.com/router/latest/docs/framework/react/guide/route-trees#the-root-route
export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});
