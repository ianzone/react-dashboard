import { Outlet } from '@tanstack/react-router';
import { Layout } from 'antd';
const { Content, Sider } = Layout;
import { useState } from 'react';
import { getUrl } from 'src/assets';
import { Figure } from 'src/components';
import { Header } from './Header/Header';
import { MenuList } from './MenuList';

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Figure style={{ height: '64px' }} src={getUrl('logo.svg')} alt='logo' />
        <MenuList />
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
