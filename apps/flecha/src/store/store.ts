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

interface UserState {
  name: string | null;
  setName: (name: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: null,
  setName: (name) => set({ name }),
}));
