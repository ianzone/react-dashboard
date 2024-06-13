import { useNavigate } from '@tanstack/react-router';
import { Avatar, Dropdown, type MenuProps, Space, Typography } from 'antd';
const { Text } = Typography;
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import { signOut } from 'src/services';

export function Profile() {
  const navigate = useNavigate();
  const items: MenuProps['items'] = [
    {
      key: 'account',
      label: 'Account',
      icon: <AiOutlineUser />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      danger: true,
      label: 'Logout',
      icon: <AiOutlineLogout />,
      onClick: () => {
        signOut().then(() => {
          navigate({ to: '/signin' });
        });
      },
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Space>
        <Avatar icon={<AiOutlineUser />} />
        <Text>Admin</Text>
      </Space>
    </Dropdown>
  );
}
