import { AppProvider, AuthProvider, QueryProvider, RouteProvider, UIProvider } from './contexts';

function App() {
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

export default App;
