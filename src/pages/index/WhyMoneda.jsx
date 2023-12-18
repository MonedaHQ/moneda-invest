import { motion, useInView } from 'framer-motion';
import { PiChartBarFill } from 'react-icons/pi';
import { BiSupport } from 'react-icons/bi';
import { TbWorldSearch } from 'react-icons/tb';
import { FaHandshakeAngle } from 'react-icons/fa6';

import Section from '@/components/Section';

import styles from './styles/whymoneda.module.css';
import { useCountIncrement } from '@/hooks/useCountIncrement';
import { useRef } from 'react';
import { scaleUpSlow } from '@/utils/anim';

function WhyMoneda() {
  const ref = useRef();

  const [countYears, refYears] = useCountIncrement(0, 8, false);
  const [countTransactions, refTransactions] = useCountIncrement(0, 362, false);
  const [countSMEs, refSMEs] = useCountIncrement(0, 111, false);

  const inView = useInView(ref, { once: true });

  const stats = [
    {
      ref: refYears,
      number: countYears,
      symbol: null,
      count: null,
      metric: 'years investing in Africa',
    },
    {
      ref: refTransactions,
      number: countTransactions,
      symbol: '$',
      count: 'M',
      metric: 'processed transaction requests',
    },
    {
      ref: refSMEs,
      number: countSMEs,
      symbol: null,
      count: null,
      metric: 'onboarded African SMEs',
    },
  ];

  const features = [
    { icon: <PiChartBarFill />, caption: 'No Limit Capital, No Collateral' },
    {
      icon: <BiSupport />,
      caption: 'Technical Support - Advisory and On-field Support',
    },
    {
      icon: <TbWorldSearch />,
      caption: 'World-class Research, Intelligence and Regulatory Compliance',
    },
    { icon: <FaHandshakeAngle />, caption: 'Joint Venture and Risk Sharing' },
  ];

  return (
    <Section>
      <motion.div
        className={styles.main}
        ref={ref}
        variants={scaleUpSlow}
        initial="initial"
        animate={inView ? 'visible' : 'initial'}
      >
        <h3 className={styles.heading}>Why Moneda?</h3>
        <div className={styles.statsContainer}>
          {stats.map((stat) => (
            <Metric key={stat.metric} stat={stat} />
          ))}
        </div>
        <div className={styles.featuresContainer}>
          {features.map((feature) => (
            <Feature key={feature.caption} feature={feature} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function Metric({ stat }) {
  const { ref, number, symbol, count, metric } = stat;
  return (
    <div className={styles.stat}>
      <h4 ref={ref} className={styles.statHeader}>
        {symbol}
        {number}
        {count}
        <span>+</span>
      </h4>
      <p>{metric}</p>
    </div>
  );
}

function Feature({ feature }) {
  return (
    <div className={styles.feature}>
      <p className={styles.icon}>{feature.icon}</p>
      <p>{feature.caption}</p>
    </div>
  );
}

export default WhyMoneda;
