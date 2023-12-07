import Section from '@/components/Section';
import styles from './styles/post.module.css';
import Comments from './Comments';

function Post({ post }) {
  if (!post) return;
  return (
    <main className={styles.main}>
      <Title title={post.title} date={post.date} excerpt={post.excerpt} />
      <Body body={post.body} />
      <Comments slug={post.slug} id={post.id} />
    </main>
  );
}

function Title({ title, date, excerpt }) {
  return (
    <header className={styles.header}>
      <p className={styles.authorDate}>
        Moneda Treasury - {new Date(date).toDateString()}
      </p>
      <h1 className={styles.postTitle}>{title}</h1>
      {excerpt && (
        <p dangerouslySetInnerHTML={excerpt} className={styles.excerpt} />
      )}
    </header>
  );
}

function Body({ body }) {
  return <article dangerouslySetInnerHTML={body} className={styles.body} />;
}

export default Post;
