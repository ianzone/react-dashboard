import { createLazyFileRoute } from '@tanstack/react-router';
import { Sign } from 'src/pages';

export const Route = createLazyFileRoute('/sign')({
  component: Sign,
});
