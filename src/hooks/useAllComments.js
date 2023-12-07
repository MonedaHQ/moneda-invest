import { getComments } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export function useAllComments(slug) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['comments', slug],
    queryFn: () => getComments(slug),
    staleTime: 0,
    cacheTime: 0,
  });

  const comments = data || [];

  return { isLoading, comments, error };
}
