import type { ReactNode } from 'react';
import ReactAuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return <ReactAuthProvider store={store}>{children}</ReactAuthProvider>;
}
