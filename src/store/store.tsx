import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useStore = create<any>;
persist(
  (set, get) => ({
    token: '',
    modifyToken: () =>
      set((state: { token: string }) => ({ token: state.token })),
    removeToken: () => set({ token: '' }),
  }),
  {
    name: 'flow-storage', // unique key name
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);

export default useStore;
