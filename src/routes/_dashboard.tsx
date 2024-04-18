import { Navigate, createFileRoute } from '@tanstack/react-router';
import RingLoader from 'react-spinners/RingLoader';
import { Dashboard } from 'src/layouts';
import { isAuthenticated } from 'src/services';

export const Route = createFileRoute('/_dashboard')({
  loader: isAuthenticated,
  component: Dashboard,
  pendingComponent: () => <RingLoader />,
  errorComponent: () => <Navigate to='/sign' />,
});
