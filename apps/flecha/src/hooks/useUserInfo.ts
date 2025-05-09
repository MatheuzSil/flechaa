import { useEffect } from 'react';
import { useUserStore } from '../store/store';

export const useUserInfo = () => {
  const setName = useUserStore((state) => state.setName);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me');
        if (!res.ok) return;
        const data = await res.json();
        setName(data.name);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    fetchUser();
  }, [setName]);
};
