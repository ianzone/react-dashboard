import { useLocation, useNavigate } from '@tanstack/react-router';
import { Menu } from 'antd';
import { useDashboardRoutes } from 'src/pages';

// https://ant-design.antgroup.com/components/menu-cn?theme=dark
export function RoutesMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { routes } = useDashboardRoutes();

  const onSelect = (e: { key: string }) => {
    navigate({ to: e.key });
  };

  return (
    <Menu mode='inline' onSelect={onSelect} items={routes} selectedKeys={[location.pathname]} />
  );
}
