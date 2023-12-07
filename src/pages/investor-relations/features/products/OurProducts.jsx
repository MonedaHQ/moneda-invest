import Section from '@/components/Section';

import styles from './styles/ourproducts.module.css';
import { useRouter } from 'next/router';
import Product from './Product';
import { interestBased, shariahCompliant } from '@/data/treasuryProducts';

function OurProducts() {
  return (
    <Section>
      <main className={styles.main}>
        <Heading />
        <ProductList />
        <Product />
      </main>
    </Section>
  );
}

function Heading() {
  const router = useRouter();

  function handleProductType(value) {
    router.push(
      { pathname: router.pathname, query: { type: value } },
      undefined,
      { scroll: false }
    );
  }

  return (
    <div className={styles.heading}>
      <h3>Our Products</h3>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            handleProductType('interest-based');
          }}
          className={`${styles.selectionButton} ${
            router.query.type === 'interest-based' || !router.query.type
              ? styles.activeSelection
              : ''
          }`}
        >
          Interest Based
        </button>
        <button
          onClick={() => handleProductType('shariah-compliant')}
          className={`${styles.selectionButton} ${
            router.query.type === 'shariah-compliant'
              ? styles.activeSelection
              : ''
          }`}
        >
          Shariah Compliant
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  const router = useRouter();
  const { type } = router.query;
  let currentPlan = router.query.plan;

  let plans = interestBased;
  if (type === 'shariah-compliant') {
    plans = shariahCompliant;
  }

  const allPlans = plans.map((plan) => {
    return { name: plan.name, slug: plan.slug };
  });

  if (!currentPlan) {
    currentPlan = plans.at(0).slug;
  }

  function handlePlanSelect(plan) {
    router.push(
      { pathname: router.pathname, query: { ...router.query, plan: plan } },
      undefined,
      { scroll: false }
    );
  }

  return (
    <div className={styles.plans}>
      {allPlans.map((plan) => (
        <button
          key={plan.name}
          onClick={() => handlePlanSelect(plan.slug)}
          className={`${styles.button} ${
            currentPlan === plan.slug ? styles.selected : ''
          }`}
        >
          {plan.name}
        </button>
      ))}
    </div>
  );
}

export default OurProducts;
