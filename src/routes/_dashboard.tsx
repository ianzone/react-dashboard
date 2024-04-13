import { Navigate, createFileRoute } from '@tanstack/react-router';
import { Spin } from 'antd';
import { Dashboard } from 'src/layouts';
import { isAuthenticated } from 'src/services';

export const Route = createFileRoute('/_dashboard')({
  loader: isAuthenticated,
  component: Dashboard,
  pendingComponent: () => <Spin fullscreen size='large' tip='Loading' />,
  errorComponent: () => <Navigate to='/sign' />,
});
