import { Avatar, Badge, Dropdown, MenuProps, Space } from 'antd';
import { AiOutlineLogout, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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
    label: <NavLink to='/account'>Account</NavLink>,
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
      alert('Logout');
    },
  },
];

export function AvatarSection() {
  return (
    <Space>
      <div style={{ color: 'white' }}>Welcome</div>
      <Dropdown menu={{ items }}>
        <Badge dot>
          <Avatar icon={<AiOutlineUser size='1.5rem' />} />
        </Badge>
      </Dropdown>
    </Space>
  );
}
