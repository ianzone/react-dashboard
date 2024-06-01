import { Flex, Layout } from 'antd';
const { Content, Footer } = Layout;
import { Outlet } from '@tanstack/react-router';
import { Figure } from 'src/components';

export function SignLayout() {
  return (
    <Layout style={{ height: '100%' }}>
      <Content>
        <Flex vertical align='center'>
          <Figure width='6rem' style={{ marginTop: '8%' }} src='vite.svg' alt='Vite logo' />
          <Outlet />
        </Flex>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Dashboard ©{new Date().getFullYear()} Created by Ian
      </Footer>
    </Layout>
  );
}
