import { create } from 'zustand';

type State = {
  activeCapability: string;
};

type Actions = {
  setActiveCapability: (activeDomain?: string) => void;
};

export const useIntegrationsStore = create<State & Actions>((set) => ({
  activeCapability: '',
  setActiveCapability: (activeCapability) =>
    set(() => ({
      activeCapability,
    })),
}));
