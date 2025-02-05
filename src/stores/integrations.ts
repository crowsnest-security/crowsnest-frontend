import { create } from 'zustand';

type State = {
  activeCapabilities?: Array<number>;
};

type Actions = {
  setActiveCapability: (activeCapability: number) => void;
};

export const useIntegrationsStore = create<State & Actions>((set) => ({
  activeCapabilities: [],
  setActiveCapability: (activeCapability) =>
    set((state) => {
      const activeCapabilities = state.activeCapabilities?.includes(
        activeCapability || 0,
      )
        ? state.activeCapabilities.filter((id) => id !== activeCapability)
        : [...(state.activeCapabilities || []), activeCapability];
      return {
        activeCapabilities,
      };
    }),
}));
