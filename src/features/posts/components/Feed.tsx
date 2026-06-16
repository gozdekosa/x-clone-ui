"use client";

import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import { useInfinitePosts } from "@/features/posts/hooks/useInfinitePosts";
import FeedHeader from "./FeedHeader";
import FeedComposer from "./FeedComposer";

const Feed = () => {
  
  const { visibleCount, loadMoreRef } = useInfinitePosts(posts.length);

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <Tabs defaultValue="overview" className="w-full">

        <FeedHeader />

        <TabsContent value="overview">
            <FeedComposer />

            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}

            <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
              {visibleCount < posts.length ? (
                <p className="text-xs text-neutral-500">Loading more...</p>
              ) : (
                <p className="text-xs text-neutral-600">No more posts</p>
              )}
            </div>
            
        </TabsContent>

        <TabsContent value="analytics">
            <p>tab2</p>
        </TabsContent>
    </Tabs>
    );
}

export default Feed;