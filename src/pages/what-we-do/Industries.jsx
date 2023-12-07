import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import Section from '@/components/Section';

import styles from './styles/industries.module.css';
import { slide } from '@/utils/anim';
import { useRef } from 'react';

const industryData = [
  { title: 'Energy Value Chain', image: '/images/energy-value-chain.jpg' },
  {
    title: 'Renewables Deployment',
    image: '/images/renewables-deployment.jpg',
  },
  { title: 'Solid Minerals', image: '/images/solid-minerals.jpg' },
];

function Industries() {
  return (
    <Section>
      <main className={styles.main}>
        <h3 className={styles.heading}>Industries we serve</h3>
        <div className={styles.cards}>
          {industryData.map((item, index) => (
            <Card key={item.title} item={item} index={index} />
          ))}
        </div>
      </main>
    </Section>
  );
}

function Card({ item, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      className={styles.card}
      variants={slide}
      custom={index}
      ref={ref}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
    >
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          width={200}
          height={200}
          alt={item.title}
          draggable={false}
        />
      </div>
      <h4 className={styles.cardTitle}>{item.title}</h4>
    </motion.div>
  );
}

export default Industries;
