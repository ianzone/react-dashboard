import { Menu, MenuProps } from 'antd';
import { AiOutlineFileText, AiOutlineUser } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();

  const onSelect = (e: { key: string }) => {
    navigate(e.key);
  };

  return (
    <Menu
      theme='dark'
      mode='inline'
      onSelect={onSelect}
      items={items}
      selectedKeys={[location.pathname]}
    />
  );
}
