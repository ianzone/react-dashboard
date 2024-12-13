import { createFileRoute } from '@tanstack/react-router';
import { IoFileTrayFullOutline } from 'react-icons/io5';
import { Files } from 'src/pages';

export const Route = createFileRoute('/_dashboard/files')({
  component: Files,
  staticData: {
    order: 5,
    label: '文件管理',
    icon: <IoFileTrayFullOutline />,
  },
});
