import { createLazyFileRoute } from '@tanstack/react-router';
import { Home } from 'src/pages';

export const Route = createLazyFileRoute('/_dashboard/')({
  component: Home,
});
