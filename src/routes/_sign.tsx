import { createFileRoute } from '@tanstack/react-router';
import { SignLayout } from 'src/layouts';

export const Route = createFileRoute('/_sign')({
  component: SignLayout,
});
