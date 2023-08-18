import { Avatar, Badge, Dropdown, MenuProps, Space } from 'antd';
import { AiOutlineLogout, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { NavLink, useFetcher, useRouteLoaderData } from 'react-router-dom';
import { routes } from 'src/pages';

export function AvatarSection() {
  // Get our logged in user, if they exist, from the root route loader data
  // LINK: src/AppRouter.tsx#route-root
  const { user } = useRouteLoaderData('root') as { user: string | null };
  const fetcher = useFetcher();

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
      label: <NavLink to={routes.account}>Account</NavLink>,
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
        fetcher.submit({}, { method: 'post', action: routes.logout });
      },
    },
  ];

  return (
    <Space>
      <div style={{ color: 'white' }}>Welcome, {user} !</div>
      <Dropdown menu={{ items }}>
        <Badge dot>
          <Avatar icon={<AiOutlineUser size='1.5rem' />} />
        </Badge>
      </Dropdown>
    </Space>
  );
}
