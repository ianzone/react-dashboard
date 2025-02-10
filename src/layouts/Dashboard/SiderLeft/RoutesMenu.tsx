import { type Route, useLocation, useNavigate, useRouter } from '@tanstack/react-router';
import { type GetProp, Menu, type MenuProps } from 'antd';
import { useMemo } from 'react';
export type Item = GetProp<MenuProps, 'items'>[number] & { order: number };

// https://ant-design.antgroup.com/components/menu-cn?theme=dark
export function RoutesMenu() {
  const { routesByPath } = useRouter();
  const navigate = useNavigate();
  const location = useLocation();

  const onSelect = (e: { key: string }) => {
    navigate({ to: e.key });
  };

  const items = useMemo(() => {
    const menuRoutes: Item[] = [];
    const routes = Object.values(routesByPath) as Route[];
    for (const route of routes) {
      const staticData = route.options.staticData;
      if (staticData?.menu) {
        menuRoutes.push({
          order: staticData.menu.order ?? Number.POSITIVE_INFINITY,
          key: route.fullPath,
          icon: staticData.menu.icon,
          label: staticData.menu.label,
        });
      }
    }
    menuRoutes.sort((a, b) => a.order - b.order);
    return menuRoutes;
  }, [routesByPath]);

  return (
    <Menu mode='inline' onSelect={onSelect} items={items} selectedKeys={[location.pathname]} />
  );
}
