import { motion } from 'framer-motion';

import { slideUp } from '@/utils/anim';

import styles from './styles/burgerdropdown.module.css';
import { useRouter } from 'next/router';
import { useMenuToggler } from '@/context/MenuToggleContext';

function BurgerDropDown({ dropdown }) {
  const router = useRouter();

  return (
    <motion.div
      className={styles.dropdown}
      variants={slideUp}
      animate="enter"
      initial="initial"
    >
      <ul className={styles.navList}>
        {dropdown?.map((link) => (
          <DropLink key={link.label} link={link} />
        ))}
      </ul>
    </motion.div>
  );
}

function DropLink({ link }) {
  const { closeMenu } = useMenuToggler();

  const router = useRouter();
  return (
    <li
      onClick={() => {
        router.push(link.path);
        closeMenu();
      }}
    >
      {link.label}
    </li>
  );
}

export default BurgerDropDown;
