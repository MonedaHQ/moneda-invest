import Section from './Section';
import styles from './styles/introduction.module.css';

function Introduction({ content }) {
  const { title, paragraph } = content;
  return (
    <Section>
      <main className={styles.main}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </main>
    </Section>
  );
}

export default Introduction;
