import { Breadcrumb } from 'antd';

export function HeaderLeft() {
  return (
    <Breadcrumb
      style={{ display: 'flex', alignItems: 'center' }}
      items={[
        {
          title: 'Home',
        },
        {
          title: 'Application Center',
        },
        {
          title: 'Application List',
        },
        {
          title: 'An Application',
        },
      ]}
    />
  );
}
