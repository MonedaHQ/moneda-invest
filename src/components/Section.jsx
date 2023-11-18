import styles from './styles/section.module.css';

function Section({ children, variant }) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      {children}
    </section>
  );
}

export default Section;
