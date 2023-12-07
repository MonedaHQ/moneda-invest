import { motion, useInView } from 'framer-motion';
import { PiClockClockwise, PiDoorOpen, PiShieldCheck } from 'react-icons/pi';

import Section from '@/components/Section';

import styles from './styles/features.module.css';
import { useRef } from 'react';
import { slide } from '@/utils/anim';

function Features() {
  const features = [
    { icon: <PiDoorOpen />, caption: 'Free entry, free exit' },
    { icon: <PiShieldCheck />, caption: 'Guranteed by our parent company' },
    { icon: <PiClockClockwise />, caption: 'Short to Medium Tenor' },
  ];
  return (
    <Section>
      <main className={styles.main}>
        {features.map((feature, index) => (
          <Feature feature={feature} index={index} key={feature.caption} />
        ))}
      </main>
    </Section>
  );
}

function Feature({ feature, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      className={styles.feature}
      custom={index}
      ref={ref}
      variants={slide}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
    >
      {feature.icon}
      <p>{feature.caption}</p>
    </motion.div>
  );
}

export default Features;
