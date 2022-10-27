import create from 'zustand'

export const useTasksStore = create((set) => ({
  tasks: [],
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
}))