import Button from '@/components/Button';
import Section from '@/components/Section';
import TwoButtonWrapper from '@/components/TwoButtonWrapper';

import styles from './styles/projectpegasus.module.css';

function ProjectPegasus() {
  return (
    <Section variant="dark">
      <div className={styles.main}>
        <div className={styles.content}>
          <h3>
            Project <span>Pegasus</span>
          </h3>
          <p>
            Inspired by the mythical Pegasus, a symbol of strength, agility, and
            the ability to bridge the gap between earthly realities and
            boundless potential, Project Pegasus from Moneda embodies our
            commitment to empowering African SMEs to reach new heights of
            success.
          </p>
          <TwoButtonWrapper>
            <Button variant="primary-reverse">Try Pegasus</Button>
            <Button variant="link-dark">Learn more</Button>
          </TwoButtonWrapper>
        </div>
        <div className={styles.imageContainer}></div>
      </div>
    </Section>
  );
}

export default ProjectPegasus;
