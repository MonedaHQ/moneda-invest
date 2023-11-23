import { useState } from 'react';
import styles from './styles/burgernavlinks.module.css';
import Link from 'next/link';
import BurgerDropDown from './BurgerDropDown';
import { slide } from '@/utils/anim';
import { useRouter } from 'next/router';

function BurgerNavLinks({ motion, data, closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const { nav, index } = data;
  const router = useRouter();

  const dropdown = nav.dropdown;

  const icon = isOpen ? nav.icon2 : nav.icon;

  function handleClick(e, path) {
    e.preventDefault();
    if (dropdown) {
      setIsOpen(!isOpen);
    } else {
      router.push(path);
      closeMenu();
    }
  }

  return (
    <motion.li
      key={nav.label}
      className={styles.link}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      custom={index}
    >
      <Link
        href={nav.label}
        className={styles.navLink}
        onClick={(e) => handleClick(e, nav.path)}
      >
        {nav.label} {dropdown ? icon : ''}
      </Link>
      {isOpen && <BurgerDropDown dropdown={dropdown} />}
    </motion.li>
  );
}

export default BurgerNavLinks;
