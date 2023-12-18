import { motion, useInView } from 'framer-motion';
import Button from '@/components/Button';
import styles from './styles/cta.module.css';
import { useRef } from 'react';
import { scaleUpSlow } from '@/utils/anim';
import { useRouter } from 'next/router';

function CTA() {
  const router = useRouter();
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <div className={styles.container}>
      <motion.div
        ref={ref}
        className={styles.cta}
        variants={scaleUpSlow}
        initial="initial"
        animate={inView ? 'visible' : 'initial'}
      >
        <h4>Are you willing to take that next step?</h4>
        <Button
          variant="primary"
          onClick={() => router.push('/investor-relations/invest')}
        >
          Become a partner
        </Button>
      </motion.div>
    </div>
  );
}

export default CTA;
