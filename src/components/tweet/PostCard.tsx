"use client";

import { Avatar, AvatarImage } from "../ui/avatar";
import { MessageCircle, Repeat2, Heart, ChartNoAxesColumnIncreasing, Bookmark, ArrowUpFromLine } from "lucide-react";
import { Post } from "@/types/post";
import { formatPostDate } from "@/lib/formatDate";
import { useState } from "react";
import { usePostStore } from "@/store/post-store";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const likedPosts = usePostStore((state) => state.likedPosts);
  const bookmarkedPosts = usePostStore((state) => state.bookmarkedPosts);

  const toggleLike = usePostStore((state) => state.toggleLike);
  const toggleBookmark = usePostStore((state) => state.toggleBookmark);

  const liked = likedPosts.includes(post.id);
  const bookmarked = bookmarkedPosts.includes(post.id);

  const likesCount = post.likes + (liked ? 1 : 0);

  return (
    <>
    <div
      key={post.id}
        className="flex px-5 py-3 border-b border-neutral-900 hover:cursor-pointer hover:bg-neutral-950"
    >
        <div className="profile-img">
        <Avatar className="w-10 h-10">
            <AvatarImage src={post.avatar} />
        </Avatar>
        </div>

        <div className="pl-3 flex-1">
        <div className="pb-2">
            <p className="font-bold text-md">
            {post.name}{" "}
            <span className="font-light text-neutral-400">
                @{post.username} · {formatPostDate(post.createdAt)}
            </span>
            </p>
        </div>

        <div>
            <p>{post.content}</p>
        </div>

        <div className="flex justify-between pt-1">
            <div className="flex items-center gap-1 text-neutral-400 hover:text-blue-400 group cursor-pointer">
            <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                <MessageCircle className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs -ms-2">{post.comments}</span>
            </div>

            <div className="flex items-center gap-1 text-neutral-400 hover:text-green-400 group cursor-pointer">
            <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                <Repeat2 className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs -ms-2">{post.reposts}</span>
            </div>

            <div
              onClick={() => toggleLike(post.id)}
              className={`flex items-center gap-1 group cursor-pointer ${
                liked ? "text-pink-500" : "text-neutral-400 hover:text-pink-400"
              }`}
            >
              <div
                className={`p-2 rounded-full transition-colors ${
                  liked
                    ? "bg-pink-500/10"
                    : "group-hover:bg-pink-500/10"
                }`}
              >
                <Heart
                  className="w-4.5 h-4.5"
                  fill={liked ? "currentColor" : "none"}
                />
              </div>
            <span className="text-xs -ms-2">
              {likesCount >= 1000
                ? `${(likesCount / 1000).toFixed(1)}K`
                : likesCount}
            </span>
            </div>

            <div className="flex items-center gap-1 text-neutral-400 hover:text-blue-400 group cursor-pointer">
            <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                <ChartNoAxesColumnIncreasing className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs -ms-2">
                {post.views >= 1000
                ? `${(post.views / 1000).toFixed(1)}K`
                : post.views}
            </span>
            </div>

            <div className="flex items-center gap-1 text-neutral-400 cursor-pointer">
              <div
                onClick={() => toggleBookmark(post.id)}
                className={`p-2 rounded-full transition-colors ${
                  bookmarked
                    ? "text-blue-500 bg-blue-500/10"
                    : "hover:bg-blue-500/10 hover:text-blue-400"
                }`}
              >
                <Bookmark
                  className="w-4.5 h-4.5"
                  fill={bookmarked ? "currentColor" : "none"}
                />
              </div>

              <div className="p-2 rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                  <ArrowUpFromLine className="w-4.5 h-4.5" />
              </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default PostCard;