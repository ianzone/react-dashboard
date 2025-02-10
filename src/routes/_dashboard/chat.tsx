import { createFileRoute } from '@tanstack/react-router';
import { TbBrandWechat } from 'react-icons/tb';
import { Chat } from 'src/pages';

export const Route = createFileRoute('/_dashboard/chat')({
  component: Chat,
  staticData: {
    menu: {
      label: '我的消息',
      icon: <TbBrandWechat />,
    },
  },
});
