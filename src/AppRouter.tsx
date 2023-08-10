import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MainLayout } from 'src/layouts';
import { Account, Home, NotFound, Sign, routes } from 'src/pages';

export const router = createBrowserRouter(
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
