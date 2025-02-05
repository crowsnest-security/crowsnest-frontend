import { create } from 'zustand';

type State = {
  activeCapability?: number;
};

type Actions = {
  setActiveCapability: (activeDomain?: number) => void;
};

export const useIntegrationsStore = create<State & Actions>((set) => ({
  activeCapability: undefined,
  setActiveCapability: (activeCapability) =>
    set((state) => ({
      activeCapability:
        state.activeCapability === activeCapability
          ? undefined
          : activeCapability,
    })),
}));
