import { Badge, Dropdown, type MenuProps } from 'antd';
import { FaBell } from 'react-icons/fa';

export function Notifications() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'news, jump to outer site',
    },
    {
      key: '2',
      label: 'system msg, jump to route',
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Badge count={2} size='small' style={{ display: 'block' }}>
        <FaBell />
      </Badge>
    </Dropdown>
  );
}
