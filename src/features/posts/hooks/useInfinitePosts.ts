import { useEffect, useRef, useState } from "react";

export const useInfinitePosts = (totalPosts: number) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisibleCount(10); // 🔥 posts değişince reset
  }, [totalPosts]);

  useEffect(() => {
    const current = loadMoreRef.current;
    if (!current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => {
          if (prev >= totalPosts) return prev;
          return prev + 10;
        });
      }
    }, { threshold: 0.1 });

    observer.observe(current);

    return () => observer.disconnect();
  }, [totalPosts]);

  return { visibleCount, loadMoreRef };
};