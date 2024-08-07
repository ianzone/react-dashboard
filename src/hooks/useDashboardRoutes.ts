/** 用于返回所有路由，以及当前路由 */
import { useLocation, useRouter } from '@tanstack/react-router';
import { useMemo } from 'react';

export function useDashboardRoutes() {
  const { flatRoutes } = useRouter();
  const location = useLocation();

  const routes = useMemo(() => {
    const items = [];
    for (const route of flatRoutes) {
      const staticData = route.options.staticData;
      if (staticData) {
        items.push({
          order: staticData.order || 100,
          key: route.fullPath,
          label: staticData.label,
          icon: staticData.icon,
        });
      }
    }
    items.sort((a, b) => a.order - b.order);
    return items;
  }, [flatRoutes]);

  return {
    routes,
    currentPath: location.pathname,
  };
}
