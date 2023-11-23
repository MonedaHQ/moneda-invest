import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SmoothScrollProvider>
      <MenuTogglerProvider>
        <Component {...pageProps} />
      </MenuTogglerProvider>
    </SmoothScrollProvider>
  );
}
