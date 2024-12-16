import { createFileRoute } from '@tanstack/react-router';
import { Calendar, dashboardRoute } from 'src/pages';

export const Route = createFileRoute('/_dashboard/calendar')({
  component: Calendar,
  staticData: {
    key: dashboardRoute.calendar.key,
  },
});
