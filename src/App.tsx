import { AppProvider, AuthProvider, QueryProvider, RouteProvider, UIProvider } from './contexts';

export function App() {
  return (
    <QueryProvider>
      <UIProvider>
        <AppProvider>
          <AuthProvider>
            <RouteProvider />
          </AuthProvider>
        </AppProvider>
      </UIProvider>
    </QueryProvider>
  );
}
