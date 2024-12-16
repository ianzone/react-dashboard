import { Sider } from 'antd-enhanced';
import { useState } from 'react';
import { getUrl } from 'src/assets';
import { Figure } from 'src/components';
import { RoutesMenu } from './RoutesMenu';

export function SiderLeft() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme='light'
    >
      <Figure style={{ height: '64px', padding: '10px' }} src={getUrl('logo.svg')} />
      <RoutesMenu />
    </Sider>
  );
}
