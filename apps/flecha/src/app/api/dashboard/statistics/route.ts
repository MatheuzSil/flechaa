import { dashboardRepository } from 'apps/flecha/src/lib/repositories';
import { StatisticsService } from 'apps/flecha/src/services/StatisticsService';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const statisticsService = new StatisticsService(dashboardRepository);

  try {
    const statistics = await statisticsService.getStats();
    return NextResponse.json(statistics, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch statistics:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}