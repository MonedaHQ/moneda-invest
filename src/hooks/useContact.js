import { contactApi } from '@/services/apiContact';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export function useContactUs() {
  const router = useRouter();
  const { mutate: contactUs, isLoading: isSubmitting } = useMutation({
    mutationFn: (data) => {
      contactApi(data);
    },
    onSuccess: () => {
      toast.success('Your form has been submitted!');
      router.push(
        { pathname: router.pathname, query: { status: 'success' } },
        undefined,
        { scroll: false }
      );
    },
    onError: (err) => {
      toast.error('Failed to submit', err.message);
      router.push(
        { pathname: router.pathname, query: { status: 'error' } },
        undefined,
        { scroll: false }
      );
    },
  });

  return { contactUs, isSubmitting };
}
