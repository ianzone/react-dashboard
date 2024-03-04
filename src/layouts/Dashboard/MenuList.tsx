import { useNavigate, useRouter, useRouterState } from '@tanstack/react-router';
import { Menu } from 'antd';
import { useMemo } from 'react';

// https://ant-design.antgroup.com/components/menu-cn?theme=dark
export function MenuList() {
  const navigate = useNavigate();
  const router = useRouterState();
  const { flatRoutes } = useRouter();

  const items = useMemo(() => {
    const routes = [];
    for (const route of flatRoutes) {
      const staticData = route.options.staticData;
      if (staticData) {
        routes.push({
          order: staticData.order || 100,
          key: route.fullPath,
          label: staticData.label,
          icon: staticData.icon,
        });
      }
    }
    routes.sort((a, b) => a.order - b.order);
    return routes;
  }, [flatRoutes]);

  const onSelect = (e: { key: string }) => {
    navigate({ to: e.key });
  };

  return (
    <Menu
      theme='dark'
      mode='inline'
      onSelect={onSelect}
      items={items}
      selectedKeys={[router.location.pathname]}
    />
  );
}
