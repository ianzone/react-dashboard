import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        // https://tanstack.com/query/latest/docs/react/devtools
        initialIsOpen={false}
        position='bottom-right'
      />
    </QueryClientProvider>
  );
}
