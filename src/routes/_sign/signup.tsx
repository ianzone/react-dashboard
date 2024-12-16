import { createFileRoute } from '@tanstack/react-router';
import { SignUp } from 'src/pages';

export const Route = createFileRoute('/_sign/signup')({
  component: SignUp,
});
