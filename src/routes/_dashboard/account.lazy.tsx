import { createLazyFileRoute } from '@tanstack/react-router';
import { Account } from 'src/pages';

export const Route = createLazyFileRoute('/_dashboard/account')({
  component: Account,
});
