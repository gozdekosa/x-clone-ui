import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PostStore {
  likedPosts: number[];
  bookmarkedPosts: number[];

  toggleLike: (postId: number) => void;
  toggleBookmark: (postId: number) => void;
}

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      likedPosts: [],
      bookmarkedPosts: [],

      toggleLike: (postId) =>
        set((state) => ({
          likedPosts: state.likedPosts.includes(postId)
            ? state.likedPosts.filter((id) => id !== postId)
            : [...state.likedPosts, postId],
        })),

      toggleBookmark: (postId) =>
        set((state) => ({
          bookmarkedPosts: state.bookmarkedPosts.includes(postId)
            ? state.bookmarkedPosts.filter((id) => id !== postId)
            : [...state.bookmarkedPosts, postId],
        })),
    }),
    {
      name: "post-storage",
    }
  )
);