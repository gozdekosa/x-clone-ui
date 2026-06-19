import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Flag, Image, ImagePlay, MapPin, Smile, Sparkles, X } from "lucide-react"
import { Post } from "../types/post";
import { useState } from "react";
import { usePostStore } from "@/features/posts/store/post-store";

type PostCardProps = {
  post: Post;
};

const AddComment = ({ post }: PostCardProps) => {
    const [text, setText] = useState("");
    const addComment = usePostStore((state) => state.addComment);
    const handleSubmit = () => {
        if (!text.trim()) return;

        addComment(post.id, text);

        setText("");
    };

    return (
        <div className="px-5 py-3 border-b dark:border-neutral-900 border-neutral-200 hover:cursor-pointer transition-colors">
            <p className="text-neutral-400 text-sm pb-5 ml-10">Reply to <span className="text-emerald-600">@{post.username}</span></p>
            <div className="flex gap-2">
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                </div>
                <div className="w-full">
                    <Textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Post your reply"
                    className="w-full dark:!bg-black border-none !text-lg p-0 max-h-[300px] overflow-hidden focus-visible:ring-0 resize-none"
                    />
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-5 dark:text-neutral-400 text-neutral-800">
                            <Image className="w-5 h-5 cursor-pointer" />
                            <ImagePlay className="w-5 h-5 cursor-pointer" />
                            <Sparkles className="w-5 h-5 cursor-pointer" />
                            <Smile className="w-5 h-5 cursor-pointer" />
                            <MapPin className="w-5 h-5 cursor-pointer" />
                            <Flag className="w-5 h-5 cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                onClick={handleSubmit}
                                type="submit" className="rounded-2xl px-4 py-4 font-bold bg-black dark:bg-white cursor-pointer">
                                Reply
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddComment;