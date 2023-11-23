import { createContext, useContext, useState } from 'react';

const MenuTogglerContext = createContext();

function MenuTogglerProvider({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <MenuTogglerContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </MenuTogglerContext.Provider>
  );
}

function useMenuToggler() {
  const context = useContext(MenuTogglerContext);
  if (context === undefined)
    throw new Error(
      'MenuTogglerContext was used outside of MenuTogglerProvider'
    );
  return context;
}

export { MenuTogglerProvider, useMenuToggler };
