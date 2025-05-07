import { User } from '@prisma/client';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: { name: string; email: string; password: string }): Promise<any>;
  findById(id: string): Promise<User | null>
}
