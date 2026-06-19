"use client";

import { useParams } from "next/navigation";
import { usePostStore } from "@/features/posts/store/post-store";
import RightSidebar from "@/components/layout/RightSidebar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PostCard from "@/features/posts/components/PostCard";
import AddComment from "@/features/posts/components/AddComment";

export default function PostPage() {
  const params = useParams();
  const postId = Number(params.id);

  const posts = usePostStore((state) => state.posts);
  const comments = usePostStore((state) => state.comments);

  const post = posts.find((p) => p.id === postId);

  const postComments = comments.filter(
    (c) => c.postId === postId
  );

  return (
    <>
      <main className="min-h-screen flex-1">
        <div className="sticky top-0 z-10 md:h-14 h-29 bg-background/60 backdrop-blur-md">
          <div className="p-4 flex items-center gap-8">
            <Link href="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <p className="text-lg font-bold">Post</p>
          </div>
        </div>

        <div className="relative w-full pt-2">
          {post ? (
            <>
              <PostCard post={post} />
              <AddComment post={post} />

              {postComments.map((c) => (
                <PostCard key={c.id} post={c}/>
              ))}
            </>
          ) : (
            <div className="p-5">Post not found</div>
          )}
        </div>
      </main>

      <aside className="hidden md:block w-[350px] border-l dark:border-neutral-900 px-4">
        <RightSidebar />
      </aside>
    </>
  );
}