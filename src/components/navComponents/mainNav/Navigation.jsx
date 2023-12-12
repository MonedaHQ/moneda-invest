import Image from 'next/image';
import { motion } from 'framer-motion';

import Button from '@/components/Button';
import NavLink from './NavLink';

import styles from './styles/navigation.module.css';
import { homeMenuLinks } from '@/data/menu';
import { useRouter } from 'next/router';

function Navigation({ scrollPosition, darkHero = false }) {
  const isHero = scrollPosition > 120;
  const router = useRouter();

  const isInvest = router.pathname.startsWith('/investor-relations');

  const dark = darkHero && !isHero ? 'dark' : '';
  const buttonStyle = darkHero && !isHero ? 'primary-reverse' : 'primary';
  return (
    <header
      className={`${styles.navContainer} ${isHero ? styles.whiteBg : ''} ${
        dark && styles[dark]
      }`}
    >
      <div className={styles.logoContainer}>
        <Image
          src={`/images/moneda-logo${dark}.png`}
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

      <Button
        variant={buttonStyle}
        href={!isInvest && 'https://contractor.monedainvest.app'}
        onClick={() => isInvest && router.push('/investor-relations/invest')}
      >
        {isInvest ? 'Become a partner' : 'Sign in'}
      </Button>
    </header>
  );
}

export default Navigation;
