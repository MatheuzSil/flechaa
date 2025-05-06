import { IChildRepository } from '../interfaces/IChildRepository';
import { prisma } from '../lib/prisma';

export class ChildRepository implements IChildRepository {
  async findAllPaginated(skip: number, take: number): Promise<searchResultObject[]> {
    return await prisma.child.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        class: true,
      },
      skip,
      take,
      orderBy: {
        name: 'asc',
      },
    });
  }

  async countAll(): Promise<number> {
    return await prisma.child.count();
  }

  async searchByField(field: 'name' | 'age' | 'class', value: string, skip: number, take: number): Promise<searchResultObject[]> {
    let where;
  
    if (field === 'name' || field === 'class') {
      where = {
        [field]: {
          startsWith: value,
          mode: 'insensitive',
        },
      };
    } else if (field === 'age') {
      const numericValue = Number(value);
      if (isNaN(numericValue)) return [];
      where = { age: numericValue };
    }
  
    return await prisma.child.findMany({
      where,
      select: {
        id: true,
        name: true,
        age: true,
        class: true,
      },
      skip,
      take,
      orderBy: {
        name: 'asc',
      },
    });
  }
  
  async countByField(field: 'name' | 'age' | 'class', value: string): Promise<number> {
    let where;
  
    if (field === 'name' || field === 'class') {
      where = {
        [field]: {
          startsWith: value,
          mode: 'insensitive',
        },
      };
    } else if (field === 'age') {
      const numericValue = parseInt(value);
      if (isNaN(numericValue)) return 0;
      where = { age: numericValue };
    }
  
    return await prisma.child.count({ where });
  }
}
