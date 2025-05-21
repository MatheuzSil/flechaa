export interface IParentRepository {
  create(data: { name: string; email: string; password: string; phone: string; emergencyContact: string; }): Promise<any>;
  findByEmail(email: string): Promise<any>;
  findById(id: string): Promise<any>;
}