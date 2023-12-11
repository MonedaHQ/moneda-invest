import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';

import { useSmoothScroll } from '@/context/SmoothScrollContext';

import { highlights } from '@/data/slideshowData';

import Image from 'next/image';
import Button from '@/components/Button';
import Figure from '@/components/Figure';
import TwoButtonWrapper from '@/components/TwoButtonWrapper';

import styles from './styles/herosection.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { headerAnimation } from '@/utils/anim';

function HeroSection() {
  const ref = useRef(null);

  const { handleScrollTo } = useSmoothScroll();

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
          src="/images/moneda-logo.png"
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
            variants={headerAnimation}
            initial="initial"
            animate="enter"
          >
            Driving <span>African</span> SME Success in Every Sector
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
            Sign in
          </Button>
          <Button
            variant="link-light"
            onClick={() => handleScrollTo('pegasus', 100)}
          >
            What is Pegasus?
          </Button>
        </TwoButtonWrapper>
      </main>
      <motion.div
        className={styles.imageContainer}
        ref={ref}
        style={{ scale: scaleProgress }}
      >
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={6000}
          showThumbs={false}
          showStatus={false}
        >
          {highlights.map((piece) => (
            <Figure options={piece} key={piece.src} />
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}

export default HeroSection;
