import { motion, useInView } from 'framer-motion';
import Section from '@/components/Section';

import styles from './styles/newsletter.module.css';
import Button from '@/components/Button';
import { useRef } from 'react';
import { scaleUpSlow } from '@/utils/anim';

function Newsletter() {
  const ref = useRef();

  const inView = useInView(ref, { once: true });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Section>
      <motion.div
        className={styles.main}
        ref={ref}
        variants={scaleUpSlow}
        initial="initial"
        animate={inView ? 'visible' : 'initial'}
      >
        <h3 className={styles.heading}>Subscribe to our newsletter</h3>
        <p>
          Subscribe to our newsletter and never miss out on the latest insights
          and opportunities in the African Energy sector.
        </p>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <input type="email" id="email" placeholder="johndoe@example.com" />
          <Button variant="tertiary">Subscribe</Button>
        </form>
      </motion.div>
    </Section>
  );
}

export default Newsletter;
