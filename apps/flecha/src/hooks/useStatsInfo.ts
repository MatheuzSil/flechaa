import { useEffect } from "react";
import { useDashboardStore } from "../store/store";
import useSWR from "swr";
import { fetcher } from "../utils/general";

export const useStatsInfo = () => {
  const setStatistics = useDashboardStore((state) => state.setStatistics);

  const { data, error } = useSWR('/api/dashboard/statistics', fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (data) {
      setStatistics(data);
    }
  }, [data, setStatistics]);

  return {
    statistics: data,
    error,
    isLoading: !data && !error,
  };
};