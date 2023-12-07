import { getThreePosts } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';

export function useThreePosts() {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: () => getThreePosts(),
    staleTime: 0,
    cacheTime: 0,
  });

  return { isLoading, posts, error };
}
