import { StyleProvider } from '@ant-design/cssinjs';
import { App, ConfigProvider, theme } from 'antd';
import { type ThemeMode, useThemeMode } from 'antd-enhanced';
import { type ReactNode, createContext, useContext } from 'react';
import { IconContext } from 'react-icons';

type UIContextType = {
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
};

const UIContext = createContext<UIContextType | null>(null);
UIContext.displayName = 'UIContext';

function AppWrapper({ children }: { children: ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <App
      // https://ant-design.antgroup.com/components/app-cn
      style={{
        height: '100%',
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
        background: colorBgContainer,
      }}
    >
      {children}
    </App>
  );
}

export function UIProvider({ children }: { children: ReactNode }) {
  const { theme: currentTheme, themeMode, setThemeMode } = useThemeMode({});
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
              algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
              token: {
                // colorPrimary: '#0053bc',
                // borderRadius: 14,
              },
              components: {},
            }}
          >
            <AppWrapper>{children}</AppWrapper>
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
