import { Layout } from 'antd';
import { useState } from 'react';
import { getUrl } from 'src/assets';
import { Figure } from 'src/components';
import { MenuList } from './MenuList';

export function Sider() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme='light'
    >
      <Figure style={{ height: '64px', padding: '10px' }} src={getUrl('logo.svg')} />
      <MenuList />
    </Layout.Sider>
  );
}
