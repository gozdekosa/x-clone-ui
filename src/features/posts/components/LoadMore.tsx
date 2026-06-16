interface LoadMoreProps {
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  visibleCount: number;
  posts: { length: number };
}

const LoadMore = ({ loadMoreRef, visibleCount, posts }: LoadMoreProps) => {
    return (
        <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
            {visibleCount < posts.length ? (
            <p className="text-xs text-neutral-500">Loading more...</p>
            ) : (
            <p className="text-xs text-neutral-600">No more posts</p>
            )}
        </div>
    )
}

export default LoadMore