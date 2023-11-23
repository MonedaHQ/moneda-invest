import styles from './styles/footer.module.css';
import FooterContent from './FooterContent';
import { socialLinks } from '@/data/footerLinks';

import Magnetic from '../Magnetic';

function Footer({ quickLinks, exploreLinks }) {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <FooterContent quickLinks={quickLinks} exploreLinks={exploreLinks} />
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <Socials link={link} key={link.path} />
        ))}
      </div>
      <p className={styles.allRights}>
        &copy; {year} Moneda Invest. All Rights Reserved
      </p>
    </footer>
  );
}

function Socials({ link }) {
  return (
    <Magnetic multiplier={0.3}>
      <a className={styles.socialIcon} href={link.path}>
        {link.icon}
      </a>
    </Magnetic>
  );
}

export default Footer;
