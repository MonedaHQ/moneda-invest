import Button from '@/components/Button';
import styles from './styles/report.module.css';
import { useRouter } from 'next/router';
import { PiArrowLeftLight } from 'react-icons/pi';

function Reading({ title, scrollPosition }) {
  const isHero = scrollPosition > 120;
  const router = useRouter();
  if (!title) return <p>Loading...</p>;
  return (
    <section className={`${styles.nowReading} ${isHero ? styles.display : ''}`}>
      <h5>
        Reading: <span>{title}</span>
      </h5>
      <Button variant="link-light-small" onClick={() => router.back()}>
        <PiArrowLeftLight /> Go back
      </Button>
    </section>
  );
}

export default Reading;
