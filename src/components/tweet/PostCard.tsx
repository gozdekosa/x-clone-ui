
import { Avatar, AvatarImage } from "../ui/avatar";
import { MessageCircle, Repeat2, Heart, ChartNoAxesColumnIncreasing, Bookmark, ArrowUpFromLine } from "lucide-react";
import { Post } from "@/types/post";
import { formatPostDate } from "@/lib/formatDate";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
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

            <div className="flex items-center gap-1 text-neutral-400 hover:text-pink-400 group cursor-pointer">
            <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                <Heart className="w-4.5 h-4.5" />
            </div>
            <span className="text-xs -ms-2">
                {post.likes >= 1000
                ? `${(post.likes / 1000).toFixed(1)}K`
                : post.likes}
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
            <div className="p-2 rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                <Bookmark className="w-4.5 h-4.5" />
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