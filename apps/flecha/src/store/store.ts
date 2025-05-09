import { create } from 'zustand';
import { DashboardStatistics } from '../types/dashboardStatistics';

type LoadingStore = {
  isActive: boolean;
  activateLoadAnimation: () => void;
  deactivateLoadAnimation: () => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  isActive: false,
  activateLoadAnimation: () => set({ isActive: true }),
  deactivateLoadAnimation: () => set({ isActive: false }),
}));

type EmergencyMessageStore = {
  isSending: boolean;
  activateSendingEmergency: () => void;
  deactivateSendingEmergency: () => void;
};

export const useEmergencyMessage = create<EmergencyMessageStore>((set) => ({
  isSending: false,
  activateSendingEmergency: () => set({ isSending: true }),
  deactivateSendingEmergency: () => set({ isSending: false }),
}));

type MessageStore = {
  isSending: boolean;
  activateSendingMessage: () => void;
  deactivateSendingMessage: () => void;
};

export const useMessage = create<MessageStore>((set) => ({
  isSending: false,
  activateSendingMessage: () => set({ isSending: true }),
  deactivateSendingMessage: () => set({ isSending: false }),
}));

interface UserState {
  name: string | null;
  setName: (name: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: null,
  setName: (name) => set({ name }),
}));

interface DashboardStatisticsStore {
  statistics: DashboardStatistics;
  setStatistics: (statistics: DashboardStatistics) => void;
}

export const useDashboardStore = create<DashboardStatisticsStore>((set) => ({
  statistics: {
    totalChildren: 0,
    totalClasses: 0,
    totalParents: 0,
    totalChildrenWithMedicalConditions: 0,
    totalSpecialChildren: 0,
  },
  setStatistics: (statistics: DashboardStatistics) => set({ statistics }),
}));
