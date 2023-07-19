import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// define types for state values and actions separately
export type State = {
  token: string;
  selectedModel: string;
};

export type Actions = {
  changeModel: (model: string) => void;
  modifyToken: (token: string) => void;
  removeToken: () => void;
  reset: () => void;
};

// define the initial state
const initialState: State = {
  token: '',
  selectedModel: '',
};

const useStore = create<any>(
  persist(
    (set, get) => ({
      token: '',
      selectedModel: '',
      changeModel: (model: string) => set({ selectedModel: model }),
      modifyToken: (token: string) => set({ token }),
      removeToken: () => set({ token: '' }),
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'chatipy', // unique key name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useStore;
