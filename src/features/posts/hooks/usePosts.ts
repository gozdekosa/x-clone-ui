import { useEffect, useState } from "react";
import { posts as mockPosts } from "../data/posts";
import { Post } from "../types/post";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return {
    posts,
    isLoading,
  };
};