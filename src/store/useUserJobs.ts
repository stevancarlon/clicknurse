import { create } from "zustand";

interface UserJobsState {
  userBookmarkList: string[];
  setUserBookmarkList: (bookmark: string[]) => void;
  userAppliedList: string[];
  setUserAppliedList: (applied: string[]) => void;
}

export const useUserJobs = create<UserJobsState>((set) => ({
  userBookmarkList: [],
  setUserBookmarkList: (bookmark: string[]) =>
    set({ userBookmarkList: bookmark }),
  userAppliedList: [],
  setUserAppliedList: (applied: string[]) => set({ userAppliedList: applied }),
}));
