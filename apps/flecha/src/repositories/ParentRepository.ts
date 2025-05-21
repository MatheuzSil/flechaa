import { IParentRepository } from "../interfaces/IParentRepository";
import { prisma } from '../lib/prisma';


export class ParentRepository implements IParentRepository {
  async findByEmail(email: string): Promise<any> {
    return prisma.parent.findUnique({ where: { email } });
  }

  async create(data: { name: string; email: string; password: string; phone: string; emergencyContact: string; }): Promise<any> {
    return prisma.parent.create({ data });
  }

  async findById(id: string): Promise<any> {
    return prisma.parent.findUnique({ where: { id }});
  }
}