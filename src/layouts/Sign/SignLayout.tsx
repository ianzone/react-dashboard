import { Outlet } from '@tanstack/react-router';
import { getUrl } from 'src/assets';
import { Box, Content, Footer, Layout } from 'src/components';
import { Figure } from 'src/components';

export function SignLayout() {
  return (
    <Layout>
      <Content>
        <Box justify='flex-start' style={{ paddingTop: '10rem' }}>
          <Figure style={{ width: '6rem', height: '6rem' }} src={getUrl('logo.svg')} />
          <Outlet />
        </Box>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Dashboard ©{new Date().getFullYear()} Created by Ian
      </Footer>
    </Layout>
  );
}
