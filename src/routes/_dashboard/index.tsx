import { createFileRoute } from '@tanstack/react-router';
import { AiOutlineHome } from 'react-icons/ai';
import { Home } from 'src/pages';

export const Route = createFileRoute('/_dashboard/')({
  component: Home,
  staticData: {
    order: 1,
    label: '主页',
    icon: <AiOutlineHome />,
  },
});
