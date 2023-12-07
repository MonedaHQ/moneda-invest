import Button from '@/components/Button';
import styles from './styles/commentsform.module.css';
import { useForm } from 'react-hook-form';
import { usePostComment } from '@/hooks/usePostComment';

function CommentForm({ id, dispatch }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  const { addComment, isAddingComments } = usePostComment();

  function onSubmit(data) {
    addComment({ id, data });
    dispatch({ type: 'comment/close' });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fields}>
        <fieldset className={styles.fieldset}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register('author_name', { required: 'This field is required' })}
          />
          {errors.author_name && <p>{errors.author_name.message}</p>}
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="description">Comment</label>
          <textarea
            id="description"
            placeholder="Write your comment here..."
            {...register('content', { required: 'This field is required' })}
          />
          {errors.comment && <p>{errors.content.message}</p>}
        </fieldset>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default CommentForm;
