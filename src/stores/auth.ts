import { UserRole } from '@/constants/auth';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  userRole: UserRole;
};

type Actions = {
  setUserRole: (userRole: UserRole) => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      userRole: UserRole.GUEST,

      setUserRole: (userRole) => set(() => ({ userRole })),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
