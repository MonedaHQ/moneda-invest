import Section from '@/components/Section';
import {
  PiAlignCenterVertical,
  PiChartDonut,
  PiChartBar,
  PiChartLineUp,
} from 'react-icons/pi';

import styles from './styles/features.module.css';

const features = [
  { icon: <PiAlignCenterVertical />, title: 'Due diligence' },
  { icon: <PiChartDonut />, title: 'Data Analysis' },
  { icon: <PiChartBar />, title: 'Market Research & Survey' },
  { icon: <PiChartLineUp />, title: 'Impact Analysis' },
];

function Features() {
  return (
    <Section>
      <main className={styles.main}>
        {features.map((feature) => (
          <Feature feature={feature} key={feature.title} />
        ))}
      </main>
    </Section>
  );
}

function Feature({ feature }) {
  return (
    <div className={styles.feature}>
      {feature.icon}
      <p>{feature.title}</p>
    </div>
  );
}

export default Features;
