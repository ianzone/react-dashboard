import { ConfigProvider } from 'antd';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // https://tanstack.com/query/latest/docs/react/devtools
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Account, Home, NotFound, Sign, routes } from 'src/pages';
import { AppProvider } from './AppContext';
import { MainLayout } from './layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path='/' // parent path
        element={<MainLayout />}
      >
        <Route
          index // index path is the parent path
          element={<Home />}
        />
        <Route
          path={routes.account} // child path is relative to the parent path
          element={<Account />}
        />
      </Route>
      <Route path={routes.sign} element={<Sign />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

const queryClient = new QueryClient();
// react-icon config https://github.com/react-icons/react-icons#configuration
function App() {
  const iconValue = useMemo(() => ({ size: '1.1rem' }), []);
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
