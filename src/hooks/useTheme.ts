import { useEffect, useState } from 'react';

function useSystemTheme() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // 监听系统颜色切换
    const listener = (event: { matches: boolean }) => {
      if (event.matches) {
        setThemeMode('dark');
      } else {
        setThemeMode('light');
      }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
    };
  }, []);
  return themeMode;
}

export type ThemeType = 'light' | 'dark' | 'system';

export function useTheme() {
  const [themeMode, setThemeMode] = useState<ThemeType>('system');

  const systemTheme = useSystemTheme();

  const displayTheme = themeMode === 'system' ? systemTheme : themeMode;

  return {
    displayTheme,
    themeMode,
    setThemeMode,
  };
}
