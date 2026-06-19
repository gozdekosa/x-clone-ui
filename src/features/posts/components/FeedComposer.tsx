import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CalendarClock, CirclePlus, Earth, Flag, Image, ImagePlay, MapPin, Smile, Sparkles } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import { usePostStore } from "../store/post-store";

const MAX_LENGTH = 280;

const FeedComposer = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const remaining = MAX_LENGTH - text.length;
  const progress = Math.min(text.length / MAX_LENGTH, 1);

  const addPost = usePostStore((state) => state.addPost);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.length > MAX_LENGTH) return;

    // auto resize
    const el = ref.current;
    if (!el) return;

    el.style.height = "0px";
    el.style.height = el.scrollHeight + "px";

    setText(value);
  };

  return (
    <div className="top-10 translate-y-0 dark:bg-black bg-white p-4 border-b dark:border-neutral-900 border-neutral-300">
        <div className="flex gap-2">
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
            </div>
            <div className="w-stretch">
                <Textarea 
                ref={ref}
                value={text}
                placeholder="What's happening?"
                onChange={handleChange}
                className="w-full dark:!bg-black border-none !text-lg p-0 max-h-[300px] overflow-hidden focus-visible:ring-0 resize-none"
                />
                <div className="flex items-center gap-1 mt-4">
                    <Earth className="text-emerald-500 w-4 h-4"/>
                    <p className="text-emerald-500 font-bold">Everyone can reply</p>
                </div>
                <div className="flex items-center justify-between w-full pt-3">
                    <div className="flex items-center gap-5 dark:text-neutral-400 text-neutral-800">
                        <Image className="w-5 h-5 cursor-pointer" />
                        <ImagePlay className="w-5 h-5 cursor-pointer" />
                        <Sparkles className="w-5 h-5 cursor-pointer" />
                        <Smile className="w-5 h-5 cursor-pointer" />
                        <CalendarClock className="w-5 h-5 cursor-pointer md:block hidden" />
                        <MapPin className="w-5 h-5 cursor-pointer" />
                        <Flag className="w-5 h-5 cursor-pointer md:block hidden" />

                    </div>
                    <div className="flex items-center gap-2">

                    <div className="relative">
                        <svg className="w-6 h-6 -rotate-90">
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-neutral-700"
                        />

                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray={62.8}
                            strokeDashoffset={62.8 * (1 - progress)}
                            className={`transition-all ${
                            remaining < 0 ? "text-red-500" : "text-emerald-500"
                            }`}
                        />
                        </svg>

                        <div
                        className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs ${
                            remaining < 0 ? "text-red-500" : "text-neutral-400"
                        }`}
                        >
                        {remaining}
                        </div>
                    </div>

                    <hr className="h-6 w-0.5 bg-neutral-600" />

                    <CirclePlus className="w-5 h-5 cursor-pointer dark:text-neutral-400 text-neutral-800" />

                    <Button
                        onClick={() => {
                            if (!text.trim()) return;

                            addPost(text);
                            setText("");
                        }}
                        type="submit"
                        disabled={text.length === 0}
                        className="rounded-2xl px-4 py-4 font-bold bg-black dark:bg-white cursor-pointer"
                    >
                        Post
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FeedComposer;