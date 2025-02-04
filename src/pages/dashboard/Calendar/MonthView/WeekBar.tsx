import { Card } from 'antd';
import { GridCell } from 'antd-enhanced';

export function WeekBar() {
  return (
    <GridCell rowIndex={1} colIndex={0} cols={7} style={{ display: 'flex' }}>
      <Card style={{ borderRadius: 0 }}>
        <p>周一</p>
      </Card>
      <Card style={{ borderRadius: 0 }}>
        <p>周二</p>
      </Card>
      <Card style={{ borderRadius: 0 }}>
        <p>周三</p>
      </Card>
      <Card style={{ borderRadius: 0 }}>
        <p>周四</p>
      </Card>
      <Card style={{ borderRadius: 0 }}>
        <p>周五</p>
      </Card>
      <Card style={{ borderRadius: 0 }}>
        <p>周六</p>
      </Card>
      <Card style={{ borderRadius: 0 }}>
        <p>周日</p>
      </Card>
    </GridCell>
  );
}
