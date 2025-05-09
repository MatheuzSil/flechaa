import { useEffect } from "react";
import { useStatsStore } from "../store/store";

export const usePlatformStats = () => {
  const { setStats, totalCriancas } = useStatsStore(); // Pegamos um valor para comparar

  useEffect(() => {
    const fetchStats = async () => {
      try {         
        const response = await fetch("/api/stats", {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Falha ao buscar estatísticas");
      
        const data = await response.json();
        setStats(data);
        
      } catch (error) {
        console.error("Erro no usePlatformStats:", error);
      }
    };

    fetchStats();
  }, [setStats, totalCriancas]); // Dependências controladas
};