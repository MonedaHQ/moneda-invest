import Image from 'next/image';
import styles from './styles/figure.module.css';

function Figure({ options, radius = true }) {
  const { src, alt, width, height, caption } = options;
  return (
    <figure className={styles.figure}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`${styles.image} ${radius ? styles.borderRadius : ''}`}
      />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

export default Figure;
