import { createContext, useContext } from 'react';

const SmoothScrollContext = createContext(undefined);

function SmoothScrollProvider({ children }) {
  function handleScrollTo(id, offset = 0) {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth',
    });
  }

  return (
    <SmoothScrollContext.Provider value={{ handleScrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);
  if (context === undefined)
    throw new Error(
      'SmoothScrollContext was used outside of SmoothScrollProvider'
    );

  return context;
}

export { SmoothScrollProvider, useSmoothScroll };
