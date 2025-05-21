import { IUserRepository } from '../interfaces/IUserRepository';
import bcrypt from 'bcryptjs';
import { generateToken, hashPassword } from '../utils/auth';

export class AuthService {
  constructor(private userRepo: IUserRepository) {}

  async login(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) return { error: 'user_not_found' };

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return { error: 'invalid_password' };
    const role = 'admin'; // Default to 'user' if role is not set
    const token = await generateToken(user.id, user.name, role);
    return { token };
  }

  async register(name: string, email: string, password: string) {
    const existingUser = await this.userRepo.findByEmail(email);
    if (existingUser) {
      throw new Error('USER_ALREADY_EXISTS');
    }

    const hashedPassword = await hashPassword(password);

    const user = await this.userRepo.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}
