import { registerInvestor as registerInvestorApi } from '@/services/apiInvest';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export function useRegisterInvestor() {
  const router = useRouter();

  const { mutate: registerInvestor, isLoading } = useMutation({
    mutationFn: (data) => {
      const res = registerInvestorApi(data);
      return res;
    },
    onSuccess: () => {
      toast.success('Success');
      router.push(
        { pathname: router.pathname, query: { status: 'success' } },
        undefined,
        { scroll: false }
      );
    },
    onError: (err) => {
      toast.error('Something went wrong');
      router.push(
        { pathname: router.pathname, query: { status: 'error' } },
        undefined,
        { scroll: false }
      );
    },
  });

  return { registerInvestor, isLoading };
}
