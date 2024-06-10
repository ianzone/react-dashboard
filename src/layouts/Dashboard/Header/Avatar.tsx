import { useNavigate } from '@tanstack/react-router';
import { Avatar, Badge, Dropdown, type MenuProps, Space, Typography } from 'antd';
const { Text } = Typography;
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { I18N } from 'src/i18n';
import { signOut } from 'src/services';
import { Theme } from './Theme';

export function AvatarSection() {
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
    <Space size={'middle'}>
      <Theme />
      <I18N />
      <Badge count={3} size='small' style={{ display: 'block' }}>
        <FaBell
          onClick={() => {
            alert('message');
          }}
        />
      </Badge>
      <Dropdown menu={{ items }}>
        <div>
          <Avatar style={{ margin: '0 10px' }} icon={<AiOutlineUser />} />
          <Text>Admin</Text>
        </div>
      </Dropdown>
    </Space>
  );
}
