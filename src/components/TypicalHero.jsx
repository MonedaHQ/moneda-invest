import { motion } from 'framer-motion';

import styles from './styles/typicalhero.module.css';
import { delayedFade, headerAnimation } from '@/utils/anim';
import Image from 'next/image';

function TypicalHero({ content, variant = 'xl' }) {
  const { title, citation } = content;
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.backgroundImage} />
      </div>
      <div className={styles.logoContainer}>
        <Image
          src="/moneda-logo.png"
          width={280}
          height={58.55}
          alt="Moneda Logo"
          draggable={false}
          className={styles.logo}
        />
      </div>
      <div className={styles.headingMask}>
        <motion.h1
          className={`${styles.heading} ${styles[variant]}`}
          variants={headerAnimation}
          initial="initial"
          animate="enter"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <motion.p variants={delayedFade} initial="initial" animate="visible">
        {citation}
      </motion.p>
    </section>
  );
}

export default TypicalHero;
