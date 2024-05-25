import { create } from "zustand";

const useSearch = create((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  matchingConversations: [],
  setMatchingConversations: (matchingConversations) => set({ matchingConversations }),
}));

export default useSearch;
