import { Avatar, Badge, Dropdown, MenuProps, Space } from 'antd';
import { AiOutlineLogout, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

export function AvatarSection() {
  const items: MenuProps['items'] = [
    {
      key: 'message',
      label: 'Message',
      icon: (
        <Badge count={3} size='small'>
          <AiOutlineMail />
        </Badge>
      ),
      onClick: () => {
        alert('message');
      },
    },
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
        // fetcher.submit({}, { method: 'post', action: routes.logout });
      },
    },
  ];

  return (
    <Space>
      <div style={{ color: 'white' }}>Welcome, {'user'} !</div>
      <Dropdown menu={{ items }}>
        <Badge dot>
          <Avatar icon={<AiOutlineUser size='1.5rem' />} />
        </Badge>
      </Dropdown>
    </Space>
  );
}
