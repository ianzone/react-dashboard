import { Outlet } from '@tanstack/react-router';
import { Box } from 'src/components';

// 根布局：居中、占满、主题色
export function RootLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
