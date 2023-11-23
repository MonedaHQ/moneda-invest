import { homeMenuLinks } from '@/data/menu';
import { menuSlide } from '@/utils/anim';

import BurgerNavLinks from './BurgerNavLinks';
import Curve from '../Curve';

import styles from './styles/burgermenulist.module.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useRouter } from 'next/router';

function BurgerMenuList({ motion, isMenuOpen, closeMenu }) {
  const ref = useOutsideClick(closeMenu);
  const router = useRouter();

  const isHomepage = router.pathname === '/';

  let navigationList = homeMenuLinks;

  if (!isHomepage) {
    navigationList = [{ label: 'Home', path: '/' }, ...navigationList];
  }

  return (
    <motion.nav
      className={styles.navigationList}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      ref={ref}
    >
      <div className={styles.title}>
        <h3>Navigate to</h3>
      </div>
      {navigationList.map((nav, index) => (
        <BurgerNavLinks
          key={nav.label}
          data={{ nav, index }}
          motion={motion}
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
        />
      ))}
      <Curve />
    </motion.nav>
  );
}

export default BurgerMenuList;
