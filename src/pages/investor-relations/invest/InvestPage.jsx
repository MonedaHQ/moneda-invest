import { motion, useInView } from 'framer-motion';

import Section from '@/components/Section';
import styles from './styles/invest.module.css';
import { useRouter } from 'next/router';
import Form from './Form';
import Image from 'next/image';
import Button from '@/components/Button';
import { PiCheckCircleFill, PiSealWarningFill } from 'react-icons/pi';
import { useRef } from 'react';
import { scaleUpSlow } from '@/utils/anim';

function InvestPage() {
  const router = useRouter();
  const { status } = router.query;
  return (
    <Section>
      <main className={styles.main}>
        {status && <Message status={status} />}
        {!status && (
          <>
            <MainContent />
            <FormTypes />
            <Form />
          </>
        )}
      </main>
    </Section>
  );
}

function Message({ status }) {
  const router = useRouter();

  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const isSuccess = status === 'success';
  const message = isSuccess
    ? "You have taken the first step towards partnering with Moneda! We'd be in touch soon"
    : 'There was an error submitting your form. Please try again';
  const icon = isSuccess ? <PiCheckCircleFill /> : <PiSealWarningFill />;

  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageBox}>
        <motion.div
          className={styles.message}
          variants={scaleUpSlow}
          ref={ref}
          initial="initial"
          animate={inView ? 'visible' : 'initial'}
        >
          <p className={isSuccess ? styles.successIcon : styles.failIcon}>
            {icon}
          </p>
          <p className={styles.messageParagraph}>{message}</p>
          <Button
            variant="tertiary-reverse"
            onClick={() =>
              isSuccess
                ? router.push('/investor-relations')
                : router.push('/investor-relations/invest')
            }
          >
            Go back
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.monedaLogo}>
        <Image
          src={`/images/moneda-logo.png`}
          width={280}
          height={58.55}
          alt="Moneda Logo"
          draggable={false}
          className={styles.logo}
          onClick={() => router.push('/')}
        />
      </div>
      <h3>Become a partner today!</h3>
      <p>
        Thank you for your interest in becoming a partner in our treasury
        product. This form is the first step in the process. Please fill out all
        of the fields below to the best of your ability.
      </p>
    </div>
  );
}

function FormTypes() {
  const router = useRouter();
  const formTypes = [
    { name: 'Corporate', params: 'corporate' },
    { name: 'Individual', params: 'individual' },
  ];

  let currentSelection = router.query.type;
  if (!router.query.type) {
    currentSelection = 'corporate';
  }

  function handleClick(param) {
    router.push(
      { pathname: router.pathname, query: { ...router.query, type: param } },
      undefined,
      { scroll: false }
    );
  }

  return (
    <div className={styles.formTypes}>
      {formTypes.map((type) => (
        <button
          key={type.name}
          onClick={() => handleClick(type.params)}
          className={`${styles.formButton} ${
            currentSelection === type.params ? styles.active : styles.inactive
          }`}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}

export default InvestPage;
