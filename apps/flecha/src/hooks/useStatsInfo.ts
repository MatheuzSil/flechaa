import { useEffect } from "react";
import { useDashboardStore } from "../store/store";

export const useStatsInfo = () => {
  const setStatistics = useDashboardStore((state) => state.setStatistics);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const res = await fetch('/api/dashboard/statistics');
        if (!res.ok) return;
        const data = await res.json();
        setStatistics(data);
      } catch (error) {
        console.error('Failed to fetch statistics:', error);
      }
    };

    fetchStatistics();
  }, [setStatistics]);
}