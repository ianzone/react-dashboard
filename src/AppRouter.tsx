import {
  LoaderFunctionArgs,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from 'react-router-dom';
import { MainLayout } from 'src/layouts';
import { Account, Home, Login, NotFound, routes } from 'src/pages';
import { fakeAuthProvider } from './auth';

async function loginAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get('username') as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if (!username) {
    return {
      error: 'You must provide a username to log in',
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await fakeAuthProvider.signin(username);
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: 'Invalid login attempt',
    };
  }

  const redirectTo = formData.get('redirectTo') as string | null;
  return redirect(redirectTo ?? '/');
}
async function loginLoader() {
  if (fakeAuthProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}
function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!fakeAuthProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect(`/login?${params.toString()}`);
  }
  return null;
}
export const router = createBrowserRouter(
  // https://reactrouter.com/en/main/utils/create-routes-from-elements
  createRoutesFromElements(
    <Route>
      <Route path='login' element={<Login />} action={loginAction} loader={loginLoader} />
      <Route
        path='/logout'
        action={async () => {
          await fakeAuthProvider.signout();
          return redirect('/');
        }}
      />
      <Route
        id='root'
        path='/' // parent path
        element={<MainLayout />}
        loader={() => ({ user: fakeAuthProvider.username })}
      >
        <Route
          index // index path is the parent path
          element={<Home />}
          loader={protectedLoader}
        />
        <Route
          path={routes.account} // child path is relative to the parent path
          element={<Account />}
          loader={protectedLoader}
        />
        R
      </Route>
      <Route path={routes.login} element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);
