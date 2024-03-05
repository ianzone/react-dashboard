import { Outlet } from '@tanstack/react-router';
import { Layout } from 'antd';
import { useState } from 'react';
import { Figure } from 'src/components';
import { Header } from './Header/Header';
import { MenuList } from './MenuList';

const { Content, Sider } = Layout;
export function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Figure width='2rem' style={{ height: '64px' }} src='/vite.svg' alt='Vite logo' />
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
