import { LaptopOutlined, MoonFilled, SunFilled } from '@ant-design/icons';
import { Dropdown, type MenuProps } from 'antd';
import { TbSunMoon } from 'react-icons/tb';
import { useUIContext } from 'src/contexts';

export function Theme() {
  const context = useUIContext();

  const items: MenuProps['items'] = [
    {
      key: 'light',
      label: 'Light',
      icon: <SunFilled />,
      onClick: () => {
        context.setThemeMode('light');
      },
    },
    {
      key: 'dark',
      label: 'Dark',
      icon: <MoonFilled />,
      onClick: () => {
        context.setThemeMode('dark');
      },
    },
    {
      key: 'system',
      label: 'System',
      icon: <LaptopOutlined />,
      onClick: () => {
        context.setThemeMode('system');
      },
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <TbSunMoon />
    </Dropdown>
  );
}
