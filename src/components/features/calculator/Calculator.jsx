import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { getProducts } from '@/services/apiProducts';

import { scaleUpSlow } from '@/utils/anim';

import Section from '@/components/Section';
import CalcForm from './CalcForm';

import styles from './styles/calculator.module.css';

function Calculator() {
  return (
    <Section>
      <main className={styles.main}>
        <h3 className={styles.mainHeading}>Returns Calculator</h3>
        <CalculatorDisplay />
      </main>
    </Section>
  );
}

function CalculatorDisplay() {
  const [products, setProducts] = useState([]);

  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const getAllProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (e) {
      setProducts([]);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div
      className={styles.calcDisplay}
      ref={ref}
      variants={scaleUpSlow}
      initial="initial"
      animate={inView ? 'visible' : 'initial'}
    >
      <CalcForm products={products} />
    </div>
  );
}

export default Calculator;
