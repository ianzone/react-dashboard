import { Layout, theme } from 'antd';
import { HeaderLeft } from './Left/HeaderLeft';
import { HeaderRight } from './Right/HeaderRight';

export function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{ display: 'flex', justifyContent: 'space-between', background: colorBgContainer }}
    >
      <HeaderLeft />
      <HeaderRight />
    </Layout.Header>
  );
}
