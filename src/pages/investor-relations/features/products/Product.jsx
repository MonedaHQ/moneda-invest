import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PiCheckCircleFill } from 'react-icons/pi';

import { useSmoothScroll } from '@/context/SmoothScrollContext';

import { scaleUpSlow, slide } from '@/utils/anim';

import Button from '@/components/Button';

import styles from './styles/product.module.css';
import { interestBased, shariahCompliant } from '@/data/treasuryProducts';

function Product() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('Individual');
  const { type, plan } = router.query;

  let allProducts;
  let currentProduct;

  if (type === 'shariah-compliant') {
    allProducts = shariahCompliant;
  } else {
    allProducts = interestBased;
  }

  if (plan) {
    currentProduct = allProducts.find((current) => current.slug === plan);
  } else {
    currentProduct = allProducts.at(0);
  }

  const currentPlan = currentProduct.plans;
  const selected = currentPlan?.find((plan) => plan.name === selectedPlan);

  return (
    <main className={styles.product}>
      <div className={styles.productDescription}>
        <Heading
          heading={currentProduct.name}
          hasPlans={currentPlan ? true : false}
        />
        <p>{currentProduct.paragraph}</p>
      </div>
      <div className={styles.featuresAndBenefits}>
        <List title="Features" data={currentProduct.features} index={0} />
        <List title="Benefits" data={currentProduct.benefits} index={1} />
      </div>
      {currentPlan && (
        <div className={styles.plansContainer} id="plans">
          <div className={styles.plans}>
            <h4>Plans</h4>

            <div className={styles.buttonPanel}>
              <button
                onClick={() => setSelectedPlan('Individual')}
                className={
                  selectedPlan === 'Individual' ? styles.selectedPlan : ''
                }
              >
                Individual
              </button>
              <button
                onClick={() => setSelectedPlan('Corporates')}
                className={
                  selectedPlan === 'Corporates' ? styles.selectedPlan : ''
                }
              >
                Corporates
              </button>
            </div>
            <Plans plan={selected} />
          </div>
        </div>
      )}
    </main>
  );
}

function Heading({ heading, hasPlans }) {
  const { handleScrollTo } = useSmoothScroll();
  return (
    <div className={styles.heading}>
      <h3>{heading}</h3>
      {hasPlans && (
        <Button
          variant="link-light-small"
          onClick={() => handleScrollTo('plans', 100)}
        >
          See plans
        </Button>
      )}
    </div>
  );
}

function List({ title, data, index = 0 }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      className={styles.list}
      custom={index}
      ref={ref}
      variants={slide}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
    >
      <h4>{title}</h4>
      <ul>
        {data.map((data) => (
          <li key={data} className={styles.listitem}>
            <PiCheckCircleFill /> {data}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Plans({ plan }) {
  return (
    <ul className={styles.planList}>
      {plan.features.map((feature) => (
        <li key={feature}>
          <PiCheckCircleFill />
          {feature}
        </li>
      ))}
    </ul>
  );
}

export default Product;
