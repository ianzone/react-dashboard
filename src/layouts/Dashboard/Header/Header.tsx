import { Divider, Layout, Space, theme } from 'antd';
import { AvatarSection } from './Avatar';
import { Downloads } from './Downloads';

export function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{ display: 'flex', justifyContent: 'space-between', background: colorBgContainer }}
    >
      <div>面包屑</div>
      <Space split={<Divider type='vertical' />}>
        <div style={{ color: 'white' }}>主页</div>
        <Downloads />
      </Space>
      <AvatarSection />
    </Layout.Header>
  );
}
