import { Flex, Layout } from 'antd';
const { Content, Footer } = Layout;
import { Outlet } from '@tanstack/react-router';
import { getUrl } from 'src/assets';
import { Figure } from 'src/components';

export function SignLayout() {
  return (
    <Layout style={{ height: '100%' }}>
      <Content>
        <Flex vertical align='center'>
          <Figure width='6rem' style={{ marginTop: '10rem' }} src={getUrl('logo.svg')} alt='logo' />
          <Outlet />
        </Flex>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Dashboard ©{new Date().getFullYear()} Created by Ian
      </Footer>
    </Layout>
  );
}
