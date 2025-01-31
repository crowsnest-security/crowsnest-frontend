import { create } from 'zustand';

type Mode = 'admin' | 'dev';

type State = {
  mode: Mode;
  activeProfileId?: number;
};

type Actions = {
  toggleMode: () => void;
  setActiveProfileId: (activeProfileId?: number) => void;
};

export const useCommonDataStore = create<State & Actions>((set, get) => ({
  mode: 'dev',

  toggleMode: () =>
    set((state) => ({ mode: state.mode === 'admin' ? 'dev' : 'admin' })),
  activeProfile: undefined,
  setActiveProfileId: (activeProfileId) => set({ activeProfileId }),
}));
