import { getProducts } from '@/services/apiProducts';
import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
    staleTime: 0,
    cacheTime: 0,
  });

  return { data: data?.data, isLoading };
}
