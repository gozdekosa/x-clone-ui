import { useEffect, useState } from "react";
import { posts as mockPosts } from "../data/posts";
import { usePostStore } from "../store/post-store";

export const usePosts = () => {
  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (posts.length > 0) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setPosts, posts.length]);

  return {
    posts,
    isLoading,
  };
};