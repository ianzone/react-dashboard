import { createFileRoute } from '@tanstack/react-router';
import { Sign } from 'src/pages';

export const Route = createFileRoute('/sign')({
  component: Sign,
});
