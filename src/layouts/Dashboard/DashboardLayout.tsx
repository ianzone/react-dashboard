import { Outlet } from '@tanstack/react-router';
import { Content, Layout } from 'src/components';
import { Header } from './Header/Header';
import { Sider } from './Sider/Sider';

export function DashboardLayout() {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Content
          style={{
            margin: '1.5rem',
            // padding: '1rem',
            // https://github.com/ant-design/ant-design/issues/47047
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
