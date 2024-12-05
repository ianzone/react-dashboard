import { Outlet } from '@tanstack/react-router';
import { getUrl } from 'src/assets';
import { Box } from 'src/components';
import { Figure } from 'src/components';
import { Content, Footer, Layout } from '../Layout';

export function SignLayout() {
  return (
    <Layout
      vertical
      content={
        <Content>
          <Box justify='flex-start' style={{ paddingTop: '10rem' }}>
            <Figure style={{ width: '6rem', height: '6rem' }} src={getUrl('logo.svg')} />
            <Outlet />
          </Box>
        </Content>
      }
      footer={
        <Footer style={{ textAlign: 'center' }}>
          Dashboard ©{new Date().getFullYear()} Created by Ian
        </Footer>
      }
    />
  );
}
