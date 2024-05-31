import { Navigate, createFileRoute } from '@tanstack/react-router';
import RingLoader from 'react-spinners/RingLoader';
import { DashboardLayout } from 'src/layouts';
import { isAuthenticated } from 'src/services';

export const Route = createFileRoute('/_dashboard')({
  loader: isAuthenticated,
  component: DashboardLayout,
  pendingComponent: () => <RingLoader />,
  errorComponent: () => <Navigate to='/signin' />,
});
