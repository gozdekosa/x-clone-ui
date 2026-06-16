const FeedSkeleton = () => {
  return (
    <div className="flex gap-3 p-4 border-b border-neutral-900">
      <div className="w-10 h-10 rounded-full bg-neutral-800 animate-pulse" />

      <div className="flex-1">
        <div className="h-4 w-40 bg-neutral-800 rounded animate-pulse mb-3" />
        <div className="h-4 w-full bg-neutral-800 rounded animate-pulse mb-2" />
        <div className="h-4 w-3/4 bg-neutral-800 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default FeedSkeleton;