import { Divider, Space } from 'antd';
import { Downloads } from './Downloads';

export function Links() {
  return (
    <Space split={<Divider type='vertical' />}>
      <div style={{ color: 'white' }}>主页</div>
      <Downloads />
    </Space>
  );
}
