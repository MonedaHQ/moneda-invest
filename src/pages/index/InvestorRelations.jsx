import { PiCheckCircleFill } from 'react-icons/pi';

import Button from '@/components/Button';
import Section from '@/components/Section';
import TwoButtonWrapper from '@/components/TwoButtonWrapper';
import Image from 'next/image';

import styles from './styles/investorrelations.module.css';

function InvestorRelations({ motionKit }) {
  const { motion, inViewRef, inView } = motionKit;

  const containerVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: 'spring',
        mass: 1,
        damping: 12,
        duration: 0.1,
      },
    },
  };
  return (
    <Section>
      <motion.div
        className={styles.container}
        ref={inViewRef}
        variants={containerVariants}
        initial="initial"
        animate={inView ? 'visible' : 'initial'}
      >
        <div className={styles.content}>
          <h3>Your money can work harder than you do</h3>
          <p>
            As an investor, you&lsquo;re always looking for ways to make your
            money work harder for you. At Moneda, we understand that, and
            we&lsquo;re here to help you achieve your financial goals.
          </p>
          <ul>
            <li>
              <PiCheckCircleFill /> Earn competitive returns on your investment
            </li>
            <li>
              <PiCheckCircleFill /> Gain exposure to the dynamic African Energy
              sector
            </li>
            <li>
              <PiCheckCircleFill /> Make a positive impact
            </li>
          </ul>
          <TwoButtonWrapper>
            <Button variant="secondary"> Become a partner</Button>
            <Button variant="link-dark">Learn more</Button>
          </TwoButtonWrapper>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/investor-relations.jpg"
            width={734}
            height={734}
            alt="Investor Relations"
          />
        </div>
      </motion.div>
    </Section>
  );
}

export default InvestorRelations;
