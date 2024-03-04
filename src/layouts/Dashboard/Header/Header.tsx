import { Layout, Space } from 'antd';
import { AvatarSection } from './Avatar';

export function Header() {
  return (
    <Layout.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Space>
        <div style={{ color: 'white' }}>Other thing1</div>
        <div style={{ color: 'white' }}>Other thing2</div>
      </Space>
      <AvatarSection />
    </Layout.Header>
  );
}
