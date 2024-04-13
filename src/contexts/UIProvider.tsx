import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';
import { IconContext } from 'react-icons';

export function UIProvider({ children }: { children: ReactNode }) {
  return (
    <IconContext.Provider
      // react-icon config https://github.com/react-icons/react-icons#configuration
      value={{ size: '1.2rem' }}
    >
      <StyleProvider
        // https://github.com/ant-design/ant-design/issues/45560
        hashPriority='high'
      >
        <ConfigProvider
          theme={{
            token: {
              // colorPrimary: '#0053bc',
              // borderRadius: 14,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </StyleProvider>
    </IconContext.Provider>
  );
}
