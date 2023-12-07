import { motion } from 'framer-motion';
import Section from '@/components/Section';

import styles from './styles/corevalues.module.css';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const coreValues = [
  {
    title: 'African',
    paragraph:
      'To us, being African is more than skin color. It is a joint belief in the history and power of our lands to sustain us. It speaks to the power of the collective, over individual gains.',
    image: '/images/core-values/african.jpg',
    logo: '/images/core-values/african-logo.png',
  },
  {
    title: 'Ethics - We Fear God',
    paragraph:
      'Have you ever seen someone who tells the truth even when it does not benefit him? We see that every day at Moneda. We call this unusual behavior, radical honesty. We believe true impact can only be made by ethical people.',
    image: '/images/core-values/ethics.jpg',
    logo: '/images/core-values/ethics-logo.png',
  },
  {
    title: 'Resilience - Always 100%',
    paragraph: 'Failure is alien to us and we refuse to understand it.',
    image: '/images/core-values/resilience.jpg',
    logo: '/images/core-values/resilience-logo.png',
  },
  {
    title: 'Leadership',
    paragraph:
      'The Moneda mindset makes no excuses. It seeks out and sails through uncharted waters.',
    image: '/images/core-values/leadership.jpg',
    logo: '/images/core-values/leadership-logo.png',
  },
  {
    title: 'Continuous Learning',
    paragraph:
      'Curiosity does not kill here - it elevates. We encourage curious minds and consistently strive to expand our knowledge to extraordinary lengths. We never stop learning.',
    image: '/images/core-values/learning.jpg',
    logo: '/images/core-values/learning-logo.png',
  },
];

function OurCoreValues() {
  return (
    <Section>
      <main className={styles.main}>
        <h3 className={styles.heading}>Our Core Values</h3>
        {coreValues.map((value) => (
          <CoreValue key={value.title} value={value} motion={motion} />
        ))}
      </main>
    </Section>
  );
}

function CoreValue({ value, motion }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      className={styles.coreValue}
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className={styles.image}>
        <Image src={value.image} width={600} height={600} alt={value.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={value.logo} width={240} height={240} alt={value.title} />
        </div>
        <h3>{value.title}</h3>
        <p>{value.paragraph}</p>
      </div>
    </motion.div>
  );
}

export default OurCoreValues;
