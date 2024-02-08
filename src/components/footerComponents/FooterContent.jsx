import { PiEnvelopeSimpleFill, PiPhoneFill } from 'react-icons/pi';
import Button from '../Button';
import Image from 'next/image';

import styles from './styles/footer.module.css';
import { contactDetails } from '@/data/footerLinks';
import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa6';

function FooterContent({ quickLinks, exploreLinks }) {
  return (
    <div className={styles.footerContent}>
      <div className={styles.coin}>
        <Image
          width={600}
          height={600}
          src="/moneda-coin.png"
          alt="Kwa Africa Logo"
          draggable={false}
        />
      </div>
      <Links title="Quick links" links={quickLinks} />
      <Links title="Explore" links={exploreLinks} />
      <div className={styles.linkBlock}>
        <h4>Contact us</h4>
        <ul className={styles.contactLinks}>
          {contactDetails.phoneNumber && (
            <li>
              <PiPhoneFill />
              <Button
                variant="link-dark"
                href={contactDetails.phoneNumber.path}
              >
                {contactDetails.phoneNumber.label}
              </Button>
            </li>
          )}
          {contactDetails.whatsapp && (
            <li>
              <FaWhatsapp />
              <Button variant="link-dark" href={contactDetails.whatsapp.path}>
                {contactDetails.whatsapp.label}
              </Button>
            </li>
          )}
          <li>
            <PiEnvelopeSimpleFill />
            <Button variant="link-dark" href={contactDetails.email.path}>
              {contactDetails.email.label}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Links({ title, links }) {
  const router = useRouter();
  return (
    <div className={styles.linkBlock}>
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <Button
            variant="link-dark"
            key={link.label}
            onClick={() => router.push(link.path)}
          >
            {link.label}
          </Button>
        ))}
      </ul>
    </div>
  );
}

export default FooterContent;
