"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import PostCard from "../components/PostCard";
import { usePosts } from "../hooks/usePosts";
import { useInfinitePosts } from "@/features/posts/hooks/useInfinitePosts";
import FeedHeader from "./FeedHeader";
import FeedComposer from "./FeedComposer";
import LoadMore from "./LoadMore";
import FeedSkeleton from "./FeedSkeleton";
import Link from "next/link";

const Feed = () => {
  const { posts, isLoading } = usePosts();

  const { visibleCount, loadMoreRef } = useInfinitePosts(
    isLoading ? 0 : posts.length
  );

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <Tabs defaultValue="overview" className="w-full">
      <FeedHeader />

      <TabsContent value="overview">
        {isLoading ? (
          <FeedSkeleton />
        ) : (
          <>
            <FeedComposer />

            {visiblePosts.map((post) => (
              <Link key={post.id} href={`/post/${post.id}`}>
                <PostCard key={post.id} post={post} />
              </Link>
            ))}

            <LoadMore
              loadMoreRef={loadMoreRef}
              visibleCount={visibleCount}
              totalPosts={posts.length}
            />
          </>
        )}
      </TabsContent>

      <TabsContent value="analytics">
        <p>tab2</p>
      </TabsContent>
    </Tabs>
  );
};

export default Feed;