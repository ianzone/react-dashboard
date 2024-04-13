import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from 'src/layouts';
import { Sign } from 'src/pages';
import { isAuthenticated } from 'src/services';

export const Route = createFileRoute('/_dashboard')({
  component: () => {
    return isAuthenticated() ? <Dashboard /> : <Sign />;
  },
});
