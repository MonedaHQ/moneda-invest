import { PiArrowLeftBold } from 'react-icons/pi';
import styles from './styles/allcomments.module.css';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slide } from '@/utils/anim';
import Image from 'next/image';

function AllComments({ post, comments }) {
  const router = useRouter();

  if (!post || !comments) return;
  if (!comments.length > 5 || comments.length === 0) return router.back();

  const formattedComments = comments.map((comment) => {
    return {
      author: comment.author_name,
      date: comment.date,
      comment: { __html: comment.content.rendered },
    };
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>{post.title}</h1>
      <div className={styles.content}>
        <div className={styles.header}>
          <button className={styles.backButton} onClick={() => router.back()}>
            <PiArrowLeftBold />
          </button>
          <h3>{comments.length} Comments</h3>
        </div>
        <div className={styles.comments}>
          {formattedComments.map((comment, index) => (
            <Comment key={comment.id} comment={comment} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Comment({ comment, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  if (!comment) return;
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <Image
          width={40}
          height={40}
          src="/images/avatar.jpg"
          alt={comment.author}
        />
      </div>
      <div className={styles.commentContainer}>
        <motion.div
          className={styles.commentBody}
          ref={ref}
          custom={index}
          variants={slide}
          initial="initial"
          animate={inView ? 'enter' : 'initial'}
        >
          <p className={styles.nameBlock}>
            {comment.author} - {new Date(comment.date).toDateString()}
          </p>
          <p dangerouslySetInnerHTML={comment.comment} />
        </motion.div>
      </div>
    </div>
  );
}

export default AllComments;
