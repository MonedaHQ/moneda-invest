import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import Button from '@/components/Button';
import TwoButtonWrapper from '@/components/TwoButtonWrapper';

import styles from './styles/herosection.module.css';

function HeroSection({ motionKit }) {
  const ref = useRef(null);
  const { motion } = motionKit;

  const animation = {
    initial: { y: '100%' },
    enter: {
      y: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 20,
      },
    },
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className={styles.heroSection}>
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
      <main className={styles.mainContent}>
        <div className={styles.headingMask}>
          <motion.h1
            className={styles.heading}
            variants={animation}
            initial="initial"
            animate="enter"
          >
            Illuminating the Path to <span>African</span> Energy Success
          </motion.h1>
        </div>
        <p>
          In a terrain the world once called dark and complex, we are a guide to
          alternative credit and execution capabilities. We bring over 50 years
          of combined expertise in energy value chains, corporate finance and
          structured international trade across the African continent.
        </p>
        <TwoButtonWrapper>
          <Button variant="primary" onClick={() => console.log('Clicked')}>
            Try Pegasus
          </Button>
          <Button variant="link-light" onClick={() => console.log('Link')}>
            Learn more
          </Button>
        </TwoButtonWrapper>
      </main>
      <motion.div
        className={styles.imageContainer}
        ref={ref}
        style={{ scale: scaleProgress }}
      >
        <Image
          src="/energy-production.jpg"
          width={1236}
          height={634}
          alt="Energy Production"
          className={styles.heroImg}
          draggable={false}
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
