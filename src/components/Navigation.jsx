import Image from 'next/image';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';

import Button from './Button';
import NavLink from './navComponents/NavLink';

import styles from './styles/navigation.module.css';

const menuLinks = [
  {
    path: null,
    label: 'Who We Are',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '', label: 'Manifesto' },
      { path: '', label: 'Our Story' },
      { path: '', label: 'What We Do' },
      { path: '', label: 'Our Team' },
    ],
  },
  {
    path: '',
    label: 'Investor relations',
    icon: null,
    icon2: null,
    dropdown: null,
  },
  {
    path: '',
    label: 'Intelligence',
    icon: null,
    icon2: null,
    dropdown: null,
  },
  {
    path: '',
    label: 'Contact',
    icon: null,
    icon2: null,
    dropdown: null,
  },
];

function Navigation({ scrollPosition, motion }) {
  const isHero = scrollPosition > 120;
  return (
    <header
      className={`${styles.navContainer} ${isHero ? styles.whiteBg : ''}`}
    >
      <div className={styles.logoContainer}>
        <Image
          src="/moneda-logo.png"
          width={280}
          height={58.55}
          alt="Moneda Logo"
          draggable={false}
          className={styles.logo}
          onClick={() => console.log('Clicked!')}
        />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {menuLinks.map((link) => (
            <NavLink key={link.label} link={link} motion={motion} />
          ))}
        </ul>
      </nav>
      <Button variant="primary" onClick={() => console.log('click')}>
        Try Pegasus
      </Button>
    </header>
  );
}

export default Navigation;
