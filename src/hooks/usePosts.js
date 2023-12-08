import { getAllPosts } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export function usePosts() {
  const router = useRouter();

  const page = !router.query.page ? 1 : +router.query.page;

  const { isLoading, data, error } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => getAllPosts({ page }),
    staleTime: 0,
    cacheTime: 0,
  });

  const { totalPosts, posts } = data || { totalPosts: 0, posts: [] };

  return { isLoading, posts, totalPosts, error };
}
