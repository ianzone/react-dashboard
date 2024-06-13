import { Badge } from 'antd';
import { FaBell } from 'react-icons/fa';

export function Notifications() {
  return (
    <Badge count={3} size='small' style={{ display: 'block' }}>
      <FaBell
        onClick={() => {
          alert('message');
        }}
      />
    </Badge>
  );
}
