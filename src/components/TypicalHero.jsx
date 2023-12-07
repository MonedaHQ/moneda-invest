import { motion } from 'framer-motion';

import Image from 'next/image';
import { delayedFade, headerAnimation } from '@/utils/anim';

import styles from './styles/typicalhero.module.css';

const defaultImage = `radial-gradient(
  71.35% 71.35% at 50% 50%,
  rgba(255, 255, 255, 0.94) 0%,
  rgba(209, 209, 209, 0.94) 100%
),
url('/images/hero-images/background-img.jpg')`;

function TypicalHero({
  content,
  variant = 'xl',
  image = defaultImage,
  darkBg = false,
  imagePosition = 'center',
}) {
  const { title, citation } = content;

  const dark = darkBg ? 'dark' : '';
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImageContainer}>
        <div
          className={`${styles.backgroundImage} ${styles.mode}`}
          style={{ background: image, backgroundPosition: imagePosition }}
        />
      </div>
      <div className={styles.logoContainer}>
        <Image
          src={`/images/moneda-logo${dark}.png`}
          width={280}
          height={58.55}
          alt="Moneda Logo"
          draggable={false}
          className={styles.logo}
        />
      </div>
      <div className={styles.headingMask}>
        <motion.h1
          className={`${styles.heading} ${styles[variant]} ${
            darkBg ? styles.dark : ''
          }`}
          variants={headerAnimation}
          initial="initial"
          animate="enter"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <motion.p
        variants={delayedFade}
        initial="initial"
        animate="visible"
        className={darkBg ? styles.dark : ''}
      >
        {citation}
      </motion.p>
    </section>
  );
}

export default TypicalHero;
