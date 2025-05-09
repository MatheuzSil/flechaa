import { DashboardStatistics } from "../types/dashboardStatistics";

export interface IStatisticsRepository {
  getDashboardStatistics: () => Promise<DashboardStatistics>
}