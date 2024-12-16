import { Outlet } from '@tanstack/react-router';
import { Content, Layout } from 'antd-enhanced';
import { Header } from './Header';
import { SiderLeft } from './SiderLeft';

export function DashboardLayout() {
  return (
    <Layout
      siderLeft={<SiderLeft />}
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
    />
  );
}
