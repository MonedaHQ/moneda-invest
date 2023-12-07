import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';

import { storyData } from '@/data/storyData';
import { formatCurrency } from '@/utils/helpers';
import { useCountIncrement } from '@/hooks/useCountIncrement';

import Section from '@/components/Section';

import styles from './styles/stories.module.css';
import { useRef, useState } from 'react';
import { scaleUpSlow } from '@/utils/anim';

const years = storyData.map((data) => data.year);

function Stories() {
  const router = useRouter();
  const year = router.query.year || years.at(0);

  const selectedStory = storyData.find((story) => story.year === year);
  const title = selectedStory?.heading;
  const selectedYear = selectedStory?.year;
  return (
    <Section>
      <main className={styles.main}>
        <div className={styles.heading}>
          <SelectYear />
          <h3>
            {selectedYear} - {title}
          </h3>
        </div>
        <div className={styles.storyContainer}>
          <Story story={selectedStory} />
        </div>
      </main>
    </Section>
  );
}

function SelectYear() {
  const router = useRouter();
  const year = router.query.year;

  function handleSelectChange(e) {
    e.preventDefault();
    const { value } = e.target;
    router.push(
      { pathname: router.pathname, query: { year: value } },
      undefined,
      { scroll: false }
    );
  }

  return (
    <select
      value={year}
      onChange={(e) => handleSelectChange(e)}
      className={styles.select}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

function Story({ story }) {
  const { achievements, tradeAssets } = story;
  const storyRef = useRef();
  const inView = useInView(storyRef, { once: true });

  return (
    <motion.div
      className={styles.story}
      ref={storyRef}
      variants={scaleUpSlow}
      initial="initial"
      animate={inView ? 'visible' : 'initial'}
    >
      <ul className={styles.achievementList}>
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
      {tradeAssets && (
        <div className={styles.tradeAssets}>
          <h4>Trade Assets</h4>
          <p>{formatCurrency(tradeAssets)}</p>
        </div>
      )}
    </motion.div>
  );
}

export default Stories;
