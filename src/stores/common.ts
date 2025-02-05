import { create } from 'zustand';

type Mode = 'admin' | 'dev';

type State = {
  mode: Mode;
  activeProfile?: number;
};

type Actions = {
  toggleMode: () => void;
  setActiveProfile: (activeProfile?: number) => void;
};

export const useCommonDataStore = create<State & Actions>((set, get) => ({
  mode: 'dev',

  toggleMode: () =>
    set((state) => ({ mode: state.mode === 'admin' ? 'dev' : 'admin' })),
  activeProfile: undefined,
  setActiveProfile: (activeProfile) => set({ activeProfile }),
}));
