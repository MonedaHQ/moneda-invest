import { motion, useInView } from 'framer-motion';

import Section from '@/components/Section';
import styles from './styles/thenumbers.module.css';
import { numbersData } from '@/data/numbersData';
import { useCountIncrement } from '@/hooks/useCountIncrement';
import { hasDecimal } from '@/utils/helpers';
import { scaleUpSlow } from '@/utils/anim';

function TheNumbers() {
  return (
    <Section>
      <main className={styles.main}>
        <h3 className={styles.heading}>The Numbers</h3>
        <div className={styles.container}>
          {numbersData.map((number) => (
            <Number key={number.caption} number={number} />
          ))}
        </div>
      </main>
    </Section>
  );
}

function Number({ number }) {
  const decimal = hasDecimal(number.number);
  const [count, ref] = useCountIncrement(0, number.number, decimal);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      className={styles.number}
      ref={ref}
      variants={scaleUpSlow}
      initial="initial"
      animate={inView ? 'visible' : 'initial'}
    >
      <h3>
        {number.prefix}
        {count}
        {number.suffix}
      </h3>
      <p>{number.caption}</p>
    </motion.div>
  );
}

export default TheNumbers;
