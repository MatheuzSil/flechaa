"use server";

import { IParentRepository } from "../interfaces/IParentRepository";
import { hashPassword } from "../utils/auth";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/auth";

export class AuthParentService {
  constructor(private parentRepo: IParentRepository) {}

  async login(email: string, password: string) {
    const parent = await this.parentRepo.findByEmail(email);
    if (!parent) return { error: 'user_not_found' };

    const isPasswordValid = await bcrypt.compare(password, parent.password);
    if (!isPasswordValid) return { error: 'invalid_password' };
    const role = 'parent'; // Default to 'user' if role is not set
    const token = await generateToken(parent.id, parent.name, role);
    return { token };
  }

  async register(name: string, email: string, password: string, phone: string, emergencyContact: string) {
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
      emergencyContact
    });
    return parentUser;
  }
}