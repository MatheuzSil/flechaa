import { create } from 'zustand';

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


interface UserStats {
  totalCriancas: number | null;
  totalSalas: number | null;
  totalResponsaveis: number | null;
  totalComSaude: number | null;
  totalEspeciais: number | null;
  
  setStats: (stats: Partial<Omit<UserStats, 'setStats'>>) => void;
}

export const useStatsStore = create<UserStats>((set) => ({
  totalCriancas: 0,
  totalSalas: 0,
  totalResponsaveis: 0,
  totalComSaude: 0,
  totalEspeciais: 0,

  setStats: (stats) => set((state) => {
    // Verifica se há mudanças antes de atualizar
    const hasChanges = Object.keys(stats).some(
      key => state[key as keyof UserStats] !== stats[key as keyof typeof stats]
    );
    return hasChanges ? stats : state;
  })

}));