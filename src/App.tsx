import { ConfigProvider } from 'antd';
import { IconContext } from 'react-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // https://tanstack.com/query/latest/docs/react/devtools
import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { router } from './AppRouter';

const queryClient = new QueryClient();
const iconValue = { size: '1.1rem' };
// react-icon config https://github.com/react-icons/react-icons#configuration
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IconContext.Provider value={iconValue}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#0053bc',
              borderRadius: 14,
            },
          }}
        >
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        </ConfigProvider>
      </IconContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
