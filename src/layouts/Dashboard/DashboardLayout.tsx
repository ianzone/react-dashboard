import { Outlet } from '@tanstack/react-router';
import { Content, Layout } from '../Layout';
import { Header } from './Header/Header';
import { Sider } from './Sider/Sider';

export function DashboardLayout() {
  return (
    <Layout
      header={<Header />}
      content={
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
      }
      siderLeft={<Sider />}
    />
  );
}
