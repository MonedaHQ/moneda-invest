import Button from '@/components/Button';
import Section from '@/components/Section';
import TwoButtonWrapper from '@/components/TwoButtonWrapper';

import styles from './styles/projectpegasus.module.css';
import { useRef } from 'react';

function ProjectPegasus({ motionKit }) {
  const inViewRef = useRef();
  const { motion, useInView } = motionKit;

  const inView = useInView(inViewRef, { once: true });

  const contentVariant = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, when: 'beforeChildren', staggerChildren: 0.4 },
    },
  };

  const fadeInVariant = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const scaleUp = {
    initial: { opacity: 0, top: '18rem' },
    visible: { opacity: 1, top: '0rem', transition: { delay: 0.5 } },
  };

  const grow = {
    initial: { opacity: 0, scale: 0, left: '20rem' },
    visible: {
      opacity: 1,
      scale: 1,
      left: '12rem',
      transition: { delay: 1, duration: 0.2 },
    },
  };

  const slideRight = {
    initial: { opacity: 0, right: '8rem' },
    visible: {
      opacity: 1,
      right: '5rem',
      transition: { delay: 1.5, duration: 0.2 },
    },
  };

  return (
    <Section variant="dark">
      <div className={styles.main} id="pegasus">
        <motion.div
          className={styles.content}
          ref={inViewRef}
          variants={contentVariant}
          initial="initial"
          animate={inView ? 'visible' : 'initial'}
        >
          <h3>
            Project <span>Pegasus</span>
          </h3>
          <p>
            Inspired by the mythical Pegasus, a symbol of strength, agility, and
            the ability to bridge the gap between earthly realities and
            boundless potential, Project Pegasus from Moneda embodies our
            commitment to empowering African SMEs to reach new heights of
            success.
          </p>
          <TwoButtonWrapper>
            <Button variant="primary-reverse">Try Pegasus</Button>
            <Button variant="link-dark">Learn more</Button>
          </TwoButtonWrapper>
        </motion.div>
        <div className={styles.imageContainer} ref={inViewRef}>
          <motion.img
            src="/images/pegasus-dashboard.jpg"
            width={970}
            height={603}
            alt="pegasus-dashboard"
            className={styles.mainImage}
            variants={scaleUp}
            initial="initial"
            animate={inView ? 'visible' : 'initial'}
            draggable={false}
          />

          <motion.img
            src="/images/full-dashboard.jpg"
            width={970}
            height={603}
            alt="full-dashboard"
            className={styles.smallMainImage}
            variants={scaleUp}
            initial="initial"
            animate={inView ? 'visible' : 'initial'}
            draggable={false}
          />
          <motion.img
            src="/images/total-transactions.png"
            width={250}
            height={73}
            alt="total-transactions"
            className={styles.secondaryImage1}
            variants={grow}
            initial="initial"
            animate={inView ? 'visible' : 'initial'}
            draggable={false}
          />

          <motion.img
            src="/images/transaction-by-product.png"
            width={268}
            height={277}
            alt="transaction-by-product"
            className={styles.secondaryImage2}
            variants={slideRight}
            initial="initial"
            animate={inView ? 'visible' : 'initial'}
            draggable={false}
          />
        </div>
      </div>
    </Section>
  );
}

export default ProjectPegasus;
