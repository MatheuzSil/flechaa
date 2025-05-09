import { useEffect } from 'react';
import { useUserStore } from '../store/store';
import useSWR from 'swr';
import { fetcher } from '../utils/general';

export const useUserInfo = () => {
  const setName = useUserStore((state) => state.setName);

  const { data, error } = useSWR('/api/dashboard/me', fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (data?.name) {
      setName(data.name);
    }
  }, [data, setName]);

  return {
    name: data?.name,
    error,
    isLoading: !data && !error,
  };
};
