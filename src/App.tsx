import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import { IconContext } from 'react-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // https://tanstack.com/query/latest/docs/react/devtools
import { AppProvider } from './AppContext';
import { RouteProvider } from './contexts/RouteProvider';

const queryClient = new QueryClient();
const iconValue = { size: '1.2rem' };
// react-icon config https://github.com/react-icons/react-icons#configuration

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IconContext.Provider value={iconValue}>
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
            <AppProvider>
              <AuthProvider store={store}>
                <RouteProvider />
              </AuthProvider>
            </AppProvider>
          </ConfigProvider>
        </StyleProvider>
      </IconContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
