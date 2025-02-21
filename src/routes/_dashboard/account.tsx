import { createFileRoute } from '@tanstack/react-router';
import { AiOutlineUser } from 'react-icons/ai';
import { Account } from 'src/pages';

export const Route = createFileRoute('/_dashboard/account')({
  component: Account,
  staticData: {
    menu: {
      label: '我的账号',
      icon: <AiOutlineUser />,
    },
  },
});
