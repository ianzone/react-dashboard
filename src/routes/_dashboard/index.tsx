import { createFileRoute } from '@tanstack/react-router';
import { AiOutlineFileText } from 'react-icons/ai';
import { Home } from 'src/pages';

export const Route = createFileRoute('/_dashboard/')({
  component: Home,
  staticData: {
    order: 1,
    label: 'Home',
    icon: <AiOutlineFileText />,
  },
});
