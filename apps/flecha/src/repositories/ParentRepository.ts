import { IParentRepository } from "../interfaces/!ParentRepository";
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

  async findByCpf(cpf: string): Promise<any> {
    // Implement your logic to find a parent by CPF
  }

  async update(id: string, data: any): Promise<any> {
    // Implement your logic to update a parent
  }

  async delete(id: string): Promise<any> {
    // Implement your logic to delete a parent
  }

}