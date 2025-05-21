export interface IParentRepository {
  findByEmail(email: string): Promise<any>;
  create(data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    emergencyContact: string;
    // cpf: string;
  }): Promise<any>;
  findById(id: string): Promise<any>;
}