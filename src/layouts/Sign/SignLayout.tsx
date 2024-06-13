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
          <Figure
            style={{ marginTop: '10rem', width: '6rem', height: '6rem' }}
            src={getUrl('logo.svg')}
          />
          <Outlet />
        </Flex>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Dashboard ©{new Date().getFullYear()} Created by Ian
      </Footer>
    </Layout>
  );
}
