import Section from '@/components/Section';
import styles from './styles/post.module.css';
import PostComments from './PostComments';

import he from 'he';

function Post({ post }) {
  if (!post) return;
  return (
    <main className={styles.main}>
      <Title title={post.title} date={post.date} excerpt={post.excerpt} />
      <Body body={post.body} />
      <PostComments slug={post.slug} id={post.id} />
    </main>
  );
}

function Title({ title, date, excerpt }) {
  const decodedTitle = he.decode(title);
  const decodedExcerpt = he.decode(excerpt['__html']);
  return (
    <header className={styles.header}>
      <p className={styles.authorDate}>
        Moneda Treasury - {new Date(date).toDateString()}
      </p>
      <h1 className={styles.postTitle}>{decodedTitle}</h1>
      {excerpt && (
        <p
          dangerouslySetInnerHTML={{ __html: decodedExcerpt }}
          className={styles.excerpt}
        />
      )}
    </header>
  );
}

function Body({ body }) {
  const decodedBody = he.decode(body['__html']);
  return (
    <article
      dangerouslySetInnerHTML={{ __html: decodedBody }}
      className={styles.body}
    />
  );
}

export default Post;
