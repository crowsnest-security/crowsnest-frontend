import { create } from 'zustand';

type State = {
  activeProfile?: number;
};

type Actions = {
  setActiveProfile: (activeProfile?: number) => void;
};

export const useCommonDataStore = create<State & Actions>((set, get) => ({
  activeProfile: undefined,
  setActiveProfile: (activeProfile) => set({ activeProfile }),
}));
