import { motion, useInView } from 'framer-motion';
import Section from '@/components/Section';
import styles from './styles/ourpromise.module.css';
import { useRef } from 'react';
import { scaleUpSlow, slide } from '@/utils/anim';

const promiseStatements = [
  {
    heading: 'International Standards, Local Presence',
    paragraph:
      'Integration with economic, political and regulatory ecosystems, resulting in a material advantage in deal sourcing, pricing, risk-management and execution.',
  },
  {
    heading: 'Above Industry Profitability',
    paragraph:
      'We give access to privileged investment opportunities and execution strategies - enabling us deliver truly impressive returns to our investors and funding partners.',
  },
  {
    heading: 'Culture of Value and Sustainability',
    paragraph:
      'Our priority is growth within African value chains - so our business model ensures a significant return of value to the communities and eco-systems in which we operate.',
  },
];

function OurPromise() {
  return (
    <Section>
      <main className={styles.main}>
        <h1 className={styles.heading}>Our Promise</h1>
        <div className={styles.statements}>
          {promiseStatements.map((statement, index) => (
            <Statement
              key={statement.heading}
              statement={statement}
              index={index}
              motionKit={{ motion, useInView }}
            />
          ))}
        </div>
      </main>
    </Section>
  );
}

function Statement({ statement, motionKit, index }) {
  const { motion, useInView } = motionKit;
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      className={styles.statement}
      ref={ref}
      custom={index}
      variants={slide}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
    >
      <h4>{statement.heading}</h4>
      <p>{statement.paragraph}</p>
    </motion.div>
  );
}

export default OurPromise;
