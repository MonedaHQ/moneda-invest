import { motion, AnimatePresence } from 'framer-motion';

import { PiEquals, PiX } from 'react-icons/pi';

import { useMenuToggler } from '@/context/MenuToggleContext';

import { overlayVariants } from '@/utils/anim';

import BurgerMenuList from './BurgerMenuList';

import styles from './styles/burgernavigation.module.css';

function BurgerNavigation() {
  const { isMenuOpen, closeMenu, toggleMenu } = useMenuToggler();

  return (
    <header className={styles.navigation}>
      <div className={styles.hamburger} onClick={() => toggleMenu()}>
        {isMenuOpen ? <PiX /> : <PiEquals />}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.overlay}
            variants={overlayVariants}
            initial="initial"
            animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <BurgerMenuList
            motion={motion}
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

export default BurgerNavigation;
