import { createFileRoute } from '@tanstack/react-router';
import { ForgotPass } from 'src/pages';

export const Route = createFileRoute('/_sign/forgotpass')({
  component: () => <ForgotPass />,
});
