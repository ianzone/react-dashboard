import { ThemeSelector } from 'antd-enhanced';
import { useUIContext } from 'src/contexts';

export function Theme() {
  const context = useUIContext();

  return (
    <ThemeSelector
      onSelect={(themeMode) => {
        context.setThemeMode(themeMode);
      }}
    />
  );
}
