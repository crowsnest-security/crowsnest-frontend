import { create } from 'zustand';

type State = {
  isDrawerOpen: boolean;
};

type Actions = {
  toggleDrawer: () => void;
};

export const useLayoutStore = create<State & Actions>((set) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}));
