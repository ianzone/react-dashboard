import { useNavigate } from '@tanstack/react-router';
import { Menu } from 'antd';
import { useDashboardRoutes } from 'src/hooks';

// https://ant-design.antgroup.com/components/menu-cn?theme=dark
export function MenuList() {
  const navigate = useNavigate();
  const { routes, currentPath } = useDashboardRoutes();

  const onSelect = (e: { key: string }) => {
    navigate({ to: e.key });
  };

  return <Menu mode='inline' onSelect={onSelect} items={routes} selectedKeys={[currentPath]} />;
}
