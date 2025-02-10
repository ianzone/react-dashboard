import { createFileRoute } from '@tanstack/react-router';
import { AiOutlineHome } from 'react-icons/ai';
import { Home } from 'src/pages';

export const Route = createFileRoute('/_dashboard/')({
  component: Home,
  staticData: {
    menu: {
      order: 0,
      label: '主页',
      icon: <AiOutlineHome />,
    },
  },
});
