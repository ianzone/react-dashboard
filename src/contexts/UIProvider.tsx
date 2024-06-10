import { StyleProvider } from '@ant-design/cssinjs';
import { App, ConfigProvider, theme } from 'antd';
import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { IconContext } from 'react-icons';

type ThemeType = 'light' | 'dark' | 'system';

type UIContextType = {
  themeMode: ThemeType;
  setThemeMode: Dispatch<SetStateAction<ThemeType>>;
};

const UIContext = createContext<UIContextType | null>(null);
UIContext.displayName = 'UIContext';

export function UIProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeType>('light');

  const toUseDarkTheme = () => {
    switch (themeMode) {
      case 'dark':
        return true;
      case 'system':
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      default:
        return false;
    }
  };

  return (
    <UIContext.Provider
      value={{
        themeMode,
        setThemeMode,
      }}
    >
      <IconContext.Provider
        // react-icon config https://github.com/react-icons/react-icons#configuration
        value={{ size: '1.2em' }}
      >
        <StyleProvider
          // NOTE: https://github.com/ant-design/ant-design/issues/45560
          hashPriority='high'
        >
          <ConfigProvider
            theme={{
              algorithm: toUseDarkTheme() ? theme.darkAlgorithm : theme.defaultAlgorithm,
              token: {
                // colorPrimary: '#0053bc',
                // borderRadius: 14,
              },
            }}
          >
            <App
            // https://ant-design.antgroup.com/components/app-cn
            >
              {children}
            </App>
          </ConfigProvider>
        </StyleProvider>
      </IconContext.Provider>
    </UIContext.Provider>
  );
}

export function useUIContext() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUIContext must be used within <UIContext.Provider>');
  }
  return context;
}
