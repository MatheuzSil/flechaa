
import { IStatisticsRepository } from '../interfaces/IStatisticsRepository';
import { prisma } from '../lib/prisma';
import { cacheService } from '../services/CacheService';
import { DashboardStatistics } from '../types/dashboardStatistics';
import { timeToSecondsConverter } from '../utils/general';

export class DashboardRepository implements IStatisticsRepository {
  async getDashboardStatistics(): Promise<DashboardStatistics> {
    const cacheKey = 'dashboard:statistics';
    const cached = await cacheService.get<DashboardStatistics>(cacheKey);

    if (cached) return cached;

    const [totalChildren, totalClassesResult, totalParents, children] = await Promise.all([
      prisma.child.count(),
      prisma.child.findMany({
        select: { class: true },
        distinct: ['class']
      }),
      prisma.parent.count(),
      prisma.child.findMany({
        select: {
          medicalConditions: true,
          pcd: true
        }
      })
    ])
  
    const totalClasses = totalClassesResult.length
  
    const totalChildrenWithMedicalConditions = children.filter(
      c => c.medicalConditions.length > 0 && c.medicalConditions[0] !== 'Nenhuma'
    ).length
  
    const totalSpecialChildren = children.filter(c => c.pcd).length

    const data = {
      totalChildren,
      totalClasses,
      totalParents,
      totalChildrenWithMedicalConditions,
      totalSpecialChildren
    }

    const cacheDuration = timeToSecondsConverter(1, "weeks");

    await cacheService.set(cacheKey, data, cacheDuration); // 1 semana
  
    return data
  }
}