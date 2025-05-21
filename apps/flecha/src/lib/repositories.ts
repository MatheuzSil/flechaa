import { ChildRepository } from '../repositories/ChildRepository';
import { DashboardRepository } from '../repositories/DashboardRepository';
import { ParentRepository } from '../repositories/ParentRepository';
import { UserRepository } from '../repositories/UserRepository';

export const childRepository = new ChildRepository();
export const dashboardRepository = new DashboardRepository();
export const userRepository = new UserRepository();
export const parentUserRepository = new ParentRepository();