import { prisma } from '../lib/prisma';
import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '@prisma/client';

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async create(data: { name: string; email: string; password: string }) {
    return prisma.user.create({ data });
  }
}
