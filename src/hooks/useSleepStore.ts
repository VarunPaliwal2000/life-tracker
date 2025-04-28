import { create } from "zustand";

export const useSleepStore = create((set : any) => ({
  sessions: [],
  setSessions: (sessions: any[]) => set({ sessions }),
}));