import { motion, useInView } from 'framer-motion';
import Section from '@/components/Section';

import styles from './styles/smeresearch.module.css';
import Image from 'next/image';
import { useRef } from 'react';
import { scaleUpSlow } from '@/utils/anim';

function SMEResearch() {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <Section>
      <main className={styles.main}>
        <figure className={styles.figure}>
          <motion.div
            className={styles.image}
            ref={ref}
            variants={scaleUpSlow}
            initial="initial"
            animate={inView ? 'visible' : 'initial'}
          >
            <Image
              src="/images/research-on-sme-projects.png"
              width={770}
              height={550}
              alt="Research on SME projects in Africa, 2020 - 2025"
            />
          </motion.div>
          <figcaption className={styles.caption}>
            Research on SME projects in Africa, 2020 - 2025
          </figcaption>
        </figure>
      </main>
    </Section>
  );
}

export default SMEResearch;
