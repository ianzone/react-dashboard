import { Outlet } from '@tanstack/react-router';
import { Layout } from 'antd';
import { useState } from 'react';
import { Header } from './Header/Header';
import { MenuList } from './MenuList';

const { Content, Sider } = Layout;
export function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ display: 'grid', placeItems: 'center', margin: '15px' }}>
          <img src='/vite.svg' alt='Vite logo' />
        </div>
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
