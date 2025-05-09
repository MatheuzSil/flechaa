
import { IStatisticsRepository } from '../interfaces/IStatisticsRepository';
import { prisma } from '../lib/prisma';
import { DashboardStatistics } from '../types/dashboardStatistics';

export class DashboardRepository implements IStatisticsRepository {
  async getDashboardStatistics(): Promise<DashboardStatistics> {
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
  
    return {
      totalChildren,
      totalClasses,
      totalParents,
      totalChildrenWithMedicalConditions,
      totalSpecialChildren
    }
  }
}