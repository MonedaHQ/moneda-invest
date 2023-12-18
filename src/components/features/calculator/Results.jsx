import Button from '@/components/Button';

import styles from './styles/results.module.css';
import { formatCurrency } from '@/utils/helpers';
import { useCountIncrement } from '@/hooks/useCountIncrement';
import { useRouter } from 'next/router';

function Results({ state, reset }) {
  const router = useRouter();
  return (
    <div className={styles.results}>
      <h3 className={styles.resultsHeading}>Your returns</h3>
      <div className={styles.resultContainer}>
        {state.interestIntervals && (
          <>
            <Result
              heading="Initial Interest"
              data={state.interestIntervals}
              isUSD={state.isUSD}
            />
            <Result
              heading="Final Interest"
              data={state.interestIntervals}
              isUSD={state.isUSD}
            />
          </>
        )}
      </div>
      <div className={styles.resultContainer}>
        <Result
          heading="Interest Amount"
          data={state.interest}
          isUSD={state.isUSD}
        />
        <Result
          heading="Maturity Amount"
          data={state.maturity}
          isUSD={state.isUSD}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          variant="primary"
          onClick={() => router.push('/investor-relations/invest')}
        >
          Become a partner!
        </Button>
        <Button variant="link-light" onClick={() => reset()}>
          Go Back
        </Button>
      </div>
    </div>
  );
}

function Result({ heading, data, isUSD }) {
  const [countData, refData] = useCountIncrement(0, data);
  return (
    <div className={styles.result}>
      <h3 className={styles.resultHeading}>{heading}</h3>
      <p ref={refData} className={styles.resultBody}>
        {formatCurrency(countData, isUSD)}
      </p>
    </div>
  );
}

export default Results;
