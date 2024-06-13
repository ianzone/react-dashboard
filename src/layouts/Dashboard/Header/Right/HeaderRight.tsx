import { Space } from 'antd';
import { Links } from './Links/Links';
import { Profile } from './Profile/Profile';
import { Widgets } from './Widgets/Widgets';

export function HeaderRight() {
  return (
    <Space size={40}>
      <Links />
      <Widgets />
      <Profile />
    </Space>
  );
}
