import { Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuList } from './MenuList';

const { Header, Content, Sider } = Layout;
export function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <img src='/vite.svg' className='logo' alt='Vite logo' />
        <MenuList />
      </Sider>
      <Layout>
        <Header>header</Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
