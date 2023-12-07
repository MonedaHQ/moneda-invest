import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <MenuTogglerProvider>
          <Component {...pageProps} />
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: { duration: 3000 },
              error: { duration: 5000 },
              style: {
                fontSize: '14px',
                maxWidth: '500px',
                padding: '14px 22px',
                backgroundColor: '#FFF',
                color: '#210d00',
              },
            }}
          />
        </MenuTogglerProvider>
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}
