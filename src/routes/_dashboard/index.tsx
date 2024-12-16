import { createFileRoute } from '@tanstack/react-router';
import { Home, dashboardRoute } from 'src/pages';

export const Route = createFileRoute('/_dashboard/')({
  component: Home,
  staticData: {
    key: dashboardRoute.home.key,
  },
});
