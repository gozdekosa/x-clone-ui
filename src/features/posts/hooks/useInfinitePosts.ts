import { useEffect, useRef, useState } from "react";

export const useInfinitePosts = (totalPosts: number) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < totalPosts
        ) {
          setVisibleCount((prev) => prev + 10);
        }
      },
      { threshold: 0.1 }
    );

    const current = loadMoreRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [visibleCount, totalPosts]);

  return {
    visibleCount,
    loadMoreRef,
  };
};