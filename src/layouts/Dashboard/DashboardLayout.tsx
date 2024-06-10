import { Outlet } from '@tanstack/react-router';
import { Layout, theme } from 'antd';
const { Content, Sider } = Layout;
import { useState } from 'react';
import { getUrl } from 'src/assets';
import { Figure } from 'src/components';
import { Header } from './Header/Header';
import { MenuList } from './MenuList';

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme='light'
      >
        <Figure style={{ height: '64px' }} src={getUrl('logo.svg')} alt='logo' />
        <MenuList />
      </Sider>
      <Layout>
        <Header />
        <Content
          style={{
            margin: '1rem',
            padding: '1rem',
            // https://github.com/ant-design/ant-design/issues/47047
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
