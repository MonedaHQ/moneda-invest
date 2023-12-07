import { postComment } from '@/services/apiPosts';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export function usePostComment() {
  const router = useRouter();
  const { mutate: addComment, isLoading: isAddingComment } = useMutation({
    mutationFn: (dataInput) => {
      const { id, data } = dataInput;
      postComment(id, data);
    },
    onSuccess: () => {
      toast.success('Your comment has been submitted for review!');
    },
    onError: (err) => {
      toast.error('Failed to add comment', err.message);
    },
  });

  return { addComment, isAddingComment };
}
