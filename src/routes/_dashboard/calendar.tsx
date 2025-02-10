import { createFileRoute } from '@tanstack/react-router';
import { IoCalendarOutline } from 'react-icons/io5';
import { Calendar } from 'src/pages';

export const Route = createFileRoute('/_dashboard/calendar')({
  component: Calendar,
  staticData: {
    menu: {
      label: '日历日程',
      icon: <IoCalendarOutline />,
    },
  },
});
