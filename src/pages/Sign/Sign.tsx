import { Flex, Layout } from 'antd';
const { Content, Footer } = Layout;
import { Figure } from 'src/components';
import { Segments } from './Segments';

export function Sign() {
  return (
    <Layout style={{ height: '100%' }}>
      <Content>
        <Flex vertical align='center'>
          <Figure width='6rem' style={{ marginTop: '8%' }} src='/vite.svg' alt='Vite logo' />
          <Segments />
        </Flex>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Dashboard ©{new Date().getFullYear()} Created by Ian
      </Footer>
    </Layout>
  );
}
