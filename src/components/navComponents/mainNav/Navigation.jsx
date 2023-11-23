import Image from 'next/image';

import Button from '@/components/Button';
import NavLink from './NavLink';

import styles from './styles/navigation.module.css';
import { homeMenuLinks } from '@/data/menu';
import { useRouter } from 'next/router';

function Navigation({ scrollPosition, motion }) {
  const isHero = scrollPosition > 120;
  const router = useRouter();
  return (
    <header
      className={`${styles.navContainer} ${isHero ? styles.whiteBg : ''}`}
    >
      <div className={styles.logoContainer}>
        <Image
          src="/images/moneda-logo.png"
          width={280}
          height={58.55}
          alt="Moneda Logo"
          draggable={false}
          className={styles.logo}
          onClick={() => router.push('/')}
        />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {homeMenuLinks.map((link) => (
            <NavLink key={link.label} link={link} motion={motion} />
          ))}
        </ul>
      </nav>
      <Button variant="primary" href="https://contractor.monedainvest.app">
        Try Pegasus
      </Button>
    </header>
  );
}

export default Navigation;
