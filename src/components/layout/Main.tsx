"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "../ui/avatar";
import PostCard from "../tweet/PostCard";
import { posts } from "@/data/posts";
import { useEffect, useRef, useState } from "react";

const Main = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const visiblePosts = posts.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 10);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Tabs defaultValue="overview" className="w-full">
        <div className="sticky top-0 z-10 md:h-14 h-25 bg-background/60 backdrop-blur-md">
        <div className="md:hidden pt-3 pl-3 flex">
            <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h5 className="pl-5 font-bold text-lg">Home</h5>
        </div>
        

        <TabsList className="w-full grid grid-cols-2" variant="line">
            <TabsTrigger value="overview" className="font-bold rounded-none p-4">
            For you
            </TabsTrigger>

            <TabsTrigger value="analytics" className="rounded-none p-4">
            Following
            </TabsTrigger>
        </TabsList>
        </div>

        <TabsContent value="overview">
            <div>
            <Input
                placeholder="What's happining?"
                className="rounded-none h-35"
            />
            </div>

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

export default Main;