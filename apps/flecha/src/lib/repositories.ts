import { ChildRepository } from '../repositories/ChildRepository';
import { DashboardRepository } from '../repositories/DashboardRepository';
import { UserRepository } from '../repositories/UserRepository';

export const childRepository = new ChildRepository();
export const dashboardRepository = new DashboardRepository();
export const userRepository = new UserRepository();