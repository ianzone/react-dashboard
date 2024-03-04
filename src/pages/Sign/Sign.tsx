import { Flex, Image, Layout } from 'antd';
const { Content, Footer } = Layout;
import { Segments } from './Segments';

export function Sign() {
  return (
    <Layout style={{ height: '100%' }}>
      <Content>
        <Flex vertical align='center' style={{ height: '100%' }}>
          <div style={{ marginTop: '10%' }}>
            <Image width={100} src='/vite.svg' />
          </div>
          <Segments />
        </Flex>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Dashboard ©{new Date().getFullYear()} Created by Ian
      </Footer>
    </Layout>
  );
}
