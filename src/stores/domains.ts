import { create } from 'zustand';

type State = {
  searchText: string;
};

type Actions = {
  setSearchText: (searchText: string) => void;
};

export const useDomainsStore = create<State & Actions>((set) => ({
  searchText: '',
  setSearchText: (searchText) =>
    set(() => {
      return {
        searchText,
      };
    }),
}));
