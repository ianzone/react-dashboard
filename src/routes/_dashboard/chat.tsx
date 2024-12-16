import { createFileRoute } from '@tanstack/react-router';
import { Chat, dashboardRoute } from 'src/pages';

export const Route = createFileRoute('/_dashboard/chat')({
  component: Chat,
  staticData: {
    key: dashboardRoute.chat.key,
  },
});
