import { IStatisticsRepository } from "../interfaces/IStatisticsRepository";

export class StatisticsService {
  constructor(private dashboardRepo: IStatisticsRepository) {}

  async getStats() {
    const statistics = await this.dashboardRepo.getDashboardStatistics();
    return statistics;
  }
}