import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, MenuProps } from 'antd';
import { AiOutlineFileText, AiOutlineUser } from 'react-icons/ai';
import { routes } from 'src/pages';

const items: MenuProps['items'] = [
  {
    key: routes.home,
    label: 'Home',
    icon: <AiOutlineFileText />,
  },
  {
    key: routes.account,
    label: 'Account',
    icon: <AiOutlineUser />,
  },
];

export function MenuList() {
  const navigate = useNavigate();
  const router = useRouterState();

  const onSelect = (e: { key: string }) => {
    navigate({ to: e.key });
  };

  return (
    <Menu
      // theme='dark'
      mode='inline'
      onSelect={onSelect}
      items={items}
      selectedKeys={[router.location.pathname]}
    />
  );
}
