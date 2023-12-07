import { getSinglePost } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';

export function usePost(slug) {
  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ['blogPost'],
    queryFn: () => getSinglePost(slug),
    staleTime: 0,
    cacheTime: 0,
  });

  return { isLoading, post, error };
}
