import { create } from "zustand";
import { User } from "../types";

interface UserState {
  user: User | undefined,
  userNames: [string] | [],
  setUser: (user: User | undefined) => void,
  setUserNames: (user: [string] | []) => void,
}

export const useUserStore = create<UserState>((set) => ({
  user: undefined,
  userNames: [],
  setUser: (user) => set(() => ({ user })),
  setUserNames: (userNames) => set(() => ({ userNames })),
}));