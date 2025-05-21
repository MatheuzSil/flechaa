import { IParentRepository } from "../interfaces/IParentRepository";
import { hashPassword } from "../utils/auth";

export class AuthParentService {
  constructor(private parentRepo: IParentRepository) {}

  async register(
    name: string,
    email: string,
    password: string,
    phone: string,
    emergencyContact: string,
    // cpf: string
  ) {
    const existingUser = await this.parentRepo.findByEmail(email);
    if (existingUser) {
      throw new Error('USER_ALREADY_EXISTS');
    }

    const hashedPassword = await hashPassword(password);

    const parentUser = await this.parentRepo.create({
      name,
      email,
      password: hashedPassword,
      phone,
      emergencyContact,
      // cpf,
    });

    return parentUser;
  }
}