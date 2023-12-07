import Image from 'next/image';
import styles from './styles/marquee.module.css';
import { useEffect, useRef } from 'react';

function Marquee({ data }) {
  const { title, paragraph, partners } = data;
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={styles.marquee}>
      <div className={styles.content}>
        <h3>{title}</h3>
        {paragraph && <p>{paragraph}</p>}
      </div>
      <div className={styles.partnersContainer}>
        <div className={styles.scrollContainer}>
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner}
              alt={title}
              width={300}
              height={137}
              className={styles.partnerLogo}
              draggable={false}
            />
          ))}
        </div>
        <div className={styles.scrollContainer}>
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner}
              alt={title}
              width={300}
              height={137}
              className={styles.partnerLogo}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
