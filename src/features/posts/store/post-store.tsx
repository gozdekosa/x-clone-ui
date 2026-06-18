import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Post } from "../types/post";

interface PostStore {
  posts: Post[];
  likedPosts: number[];
  bookmarkedPosts: number[];

  setPosts: (posts: Post[]) => void;
  addPost: (content: string) => void;

  toggleLike: (postId: number) => void;
  toggleBookmark: (postId: number) => void;
}

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      likedPosts: [],
      bookmarkedPosts: [],
      posts: [],

      setPosts: (posts) => set({ posts }),

      addPost: (content:string) =>
        set((state) => ({
          posts: [
            {
              id: Date.now(),
              name: "Gözde",
              username: "gozde",
              avatar: "https://i.pravatar.cc/150?img=11",
              content,
              comments: 0,
              reposts: 0,
              likes: 0,
              views: 0,
              createdAt: Date.now(),
            },
            ...state.posts,
          ],
      })),

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
      partialize: (state) => ({
        posts: state.posts,
        likedPosts: state.likedPosts,
        bookmarkedPosts: state.bookmarkedPosts,
      }),
    }
  )
);