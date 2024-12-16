import { useRouter } from '@tanstack/react-router';
import { useMemo } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { IoCalendarOutline, IoFileTrayFullOutline } from 'react-icons/io5';
import { TbBrandWechat } from 'react-icons/tb';

export const dashboardRoute = {
  home: {
    key: 'home',
    label: '主页',
    icon: <AiOutlineHome />,
  },
  account: {
    key: 'account',
    label: '我的账号',
    icon: <AiOutlineUser />,
  },
  chat: {
    key: 'chat',
    label: '我的消息',
    icon: <TbBrandWechat />,
  },
  calendar: {
    key: 'calendar',
    label: '日历日程',
    icon: <IoCalendarOutline />,
  },
  files: {
    key: 'files',
    label: '文件管理',
    icon: <IoFileTrayFullOutline />,
  },
} satisfies Record<
  string,
  {
    key: string;
    label: string;
    icon: JSX.Element;
  }
>;

export function useDashboardRoutes() {
  const { flatRoutes } = useRouter();

  const routesArray = useMemo(() => {
    // 所有路由，包含非dashboard路由
    for (const route of flatRoutes) {
      const key = route.options.staticData?.key;
      if (key && Object.hasOwn(dashboardRoute, key)) {
        dashboardRoute[key as keyof typeof dashboardRoute].key = route.fullPath;
      }
    }
    return Object.values(dashboardRoute);
  }, [flatRoutes]);

  return {
    routes: routesArray,
  };
}
