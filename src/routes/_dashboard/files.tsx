import { createFileRoute } from '@tanstack/react-router';
import { Files, dashboardRoute } from 'src/pages';

export const Route = createFileRoute('/_dashboard/files')({
  component: Files,
  staticData: {
    key: dashboardRoute.files.key,
  },
});
