import { motion } from 'framer-motion';

import Button from './Button';
import styles from './styles/loader.module.css';
import { scaleUpSlow } from '@/utils/anim';
import { useRouter } from 'next/router';

function Loader({ fullScreen = false, variant = 'light' }) {
  const router = useRouter();
  if (fullScreen)
    return (
      <div className={styles.fullPage}>
        <motion.div
          className={styles.loaderPage}
          variants={scaleUpSlow}
          initial="initial"
          animate="visible"
        >
          <span className={styles[variant]}></span>
          <Button variant={`link-${variant}`} onClick={() => router.back()}>
            Go back
          </Button>
        </motion.div>
      </div>
    );

  return <span className={styles[variant]}></span>;
}

export default Loader;
