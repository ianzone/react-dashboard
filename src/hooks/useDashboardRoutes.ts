/** 用于返回所有路由，以及当前路由 */
import { useLocation, useRouter } from '@tanstack/react-router';
import { useMemo } from 'react';

export function useDashboardRoutes() {
  const { flatRoutes } = useRouter();
  const location = useLocation();

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

  return {
    items,
    currentPath: location.pathname,
  };
}
