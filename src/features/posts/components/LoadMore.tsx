interface LoadMoreProps {
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  visibleCount: number;
  totalPosts: number;
}

const LoadMore = ({ loadMoreRef, visibleCount, totalPosts }: LoadMoreProps) => {
    return (
        <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
            {visibleCount < totalPosts ? (
            <p className="text-xs text-neutral-500">Loading more...</p>
            ) : (
            <p className="text-xs text-neutral-600">No more posts</p>
            )}
        </div>
    )
}

export default LoadMore