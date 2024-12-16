import { createFileRoute } from '@tanstack/react-router';
import { Account, dashboardRoute } from 'src/pages';

export const Route = createFileRoute('/_dashboard/account')({
  component: Account,
  staticData: {
    key: dashboardRoute.account.key,
  },
});
