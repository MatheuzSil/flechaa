
import { DashboardRepository } from 'apps/flecha/src/repositories/DashboardRepository';
import { StatisticsService } from 'apps/flecha/src/services/StatisticsService';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const dashboardRepo = new DashboardRepository();
  const statisticsService = new StatisticsService(dashboardRepo);

  try {
    const statistics = await statisticsService.getStats();
    return NextResponse.json(statistics, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch statistics:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}