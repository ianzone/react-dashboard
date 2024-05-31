import { createFileRoute } from '@tanstack/react-router';
import { SignIn } from 'src/pages';

export const Route = createFileRoute('/_sign/signin')({
  component: SignIn,
});
