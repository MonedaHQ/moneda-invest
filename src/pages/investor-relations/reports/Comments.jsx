import { motion, useInView } from 'framer-motion';
import Button from '@/components/Button';

import styles from './styles/comments.module.css';
import Image from 'next/image';
import { slide } from '@/utils/anim';
import { useReducer, useRef } from 'react';
import CommentForm from './CommentForm';
import { useRouter } from 'next/router';
import { useAllComments } from '@/hooks/useAllComments';

const initialState = {
  addComment: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case 'comment/toggle':
      return { ...state, addComment: !state.addComment };
    case 'comment/close':
      return { ...state, addComment: false };
  }
}

function Comments({ slug, id }) {
  const router = useRouter();
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { isLoading, comments } = useAllComments(slug);

  if (isLoading) return <p>Loading</p>;

  const allComments = comments.map((comment) => {
    return {
      author: comment.author_name,
      date: comment.date,
      comment: { __html: comment.content.rendered },
    };
  });

  const currentComments = allComments.slice(0, 4);

  return (
    <div className={styles.main}>
      <Title numComments={comments.length} actions={{ state, dispatch }} />
      {allComments.length === 0 && <p>Be the first to comment</p>}
      {state.addComment && <CommentForm id={id} dispatch={dispatch} />}
      <div className={styles.comments}>
        {currentComments.map((comment, index) => (
          <Comment comment={comment} index={index} key={comment.date} />
        ))}
      </div>
      {allComments.length > 3 && (
        <Button
          variant="link-light"
          onClick={() => router.push(`${router.asPath}/comments`)}
        >
          View all comments
        </Button>
      )}
    </div>
  );
}

function Title({ numComments, actions }) {
  const { state, dispatch } = actions;
  return (
    <div className={styles.title}>
      <h6 className={styles.heading}>Comments ({numComments})</h6>
      <Button
        variant="tertiary-reverse"
        onClick={() => dispatch({ type: 'comment/toggle' })}
      >
        {state.addComment ? 'Cancel' : 'Add comment'}
      </Button>
    </div>
  );
}

function Comment({ comment, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
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

export default Comments;
