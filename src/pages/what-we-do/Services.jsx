import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import Section from '@/components/Section';

import styles from './styles/services.module.css';
import { useRef } from 'react';
import { delayedFade } from '@/utils/anim';

const services = [
  {
    title: 'Commodities',
    paragraph:
      'We offer technical and financial support to contractors who are looking to supply commodities across the energy and extractive industries. Over the last couple of years, we have forged strong relationships with major players in this space and this guarantees our access to supplies at reasonable prices.',
    products: [
      {
        title: 'Petroleum Products',
        products: 'AGO, PMS, LPFO, Bitumen etc.',
        icon: '/images/petroleum.png',
      },
      {
        title: 'Metallic minerals',
        products: 'Gold, Silver, Iron, Tin, Cobalt, etc',
        icon: '/images/gold.png',
      },
      {
        title: 'Non-Metallic minerals',
        products: 'Limestone, Barite, Galena etc',
        icon: '/images/stone.png',
      },
    ],
  },
  {
    title: 'Projects & Services',
    paragraph:
      'We offer finance to contractors of projects in construction, operations and maintenance throughout the life cycle of the project. Our team of experts will, in collaboration with those of the contractor, provide the much-needed perspectives to optimize resources and produce world class results in record time.',
    products: null,
  },
  {
    title: 'Procurement',
    paragraph:
      'We offer funding and supply chain management solutions to contractors with purchase orders from energy companies.',
    products: null,
  },
];

function Services() {
  return (
    <Section>
      <main className={styles.main}>
        {services.map((service) => (
          <Service key={service.title} service={service} />
        ))}
      </main>
    </Section>
  );
}

function Service({ service }) {
  const { title, paragraph, products } = service;
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      className={styles.service}
      ref={ref}
      variants={delayedFade}
      initial="initial"
      animate={inView ? 'visible' : 'initial'}
    >
      <h3>{title}</h3>
      <p>{paragraph}</p>

      {products && (
        <div className={styles.products}>
          {products.map((product) => (
            <Product key={product.title} product={product} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function Product({ product }) {
  return (
    <div className={styles.product}>
      <div className={styles.icon}>
        <Image
          src={product.icon}
          width={150}
          height={150}
          alt={product.title}
          draggable={false}
        />
      </div>
      <h5>{product.title}</h5>
      <p>{product.products}</p>
    </div>
  );
}

export default Services;
