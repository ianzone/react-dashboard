import { Breadcrumb } from 'antd';
import { useDashboardRoutes } from 'src/hooks';

export function HeaderLeft() {
  useDashboardRoutes();
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
