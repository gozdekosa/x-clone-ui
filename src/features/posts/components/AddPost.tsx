"use client"

import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { CalendarClock, Circle, CirclePlus, Earth, Flag, Image, ImagePlay, MapPin, Smile, Sparkles, X } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePostStore } from "../store/post-store";
import { useState } from "react";

const AddPost = () => {
    const [content, setContent] = useState("");
    const addPost = usePostStore((state) => state.addPost);

    return (
        <DialogContent className="sm:max-w-lg top-10 translate-y-0 dark:bg-black bg-white" showCloseButton={false}>
            <DialogClose asChild>
            <button className="absolute left-4 top-4 cursor-pointer">
                <X className="h-4 w-4" />
            </button>
        </DialogClose>
          <DialogHeader className="text-end">
            <DialogTitle className="text-emerald-500 font-bold">
                Drafts
                <Button 
                onClick={() => {
                    if (!content.trim()) return;

                    addPost(content);
                    setContent("");
                }}
                type="submit" className="rounded-2xl px-4 py-4 font-bold bg-black dark:bg-white cursor-pointer md:hidden inline-flex ml-4">
                Post
            </Button>
            </DialogTitle>
            
          </DialogHeader>
          <DialogDescription className="sr-only">
            Post oluşturma modalı
          </DialogDescription>
          <div>
            <div className="flex gap-2">
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                </div>
                <Textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's happening?" 
                    className="w-full dark:!bg-black border-none !text-lg p-0 h-32 focus-visible:ring-0 resize-none max-w-lg"
                />
            </div>
            <div className="flex items-center gap-1 mt-4">
                <Earth className="text-emerald-500 w-4 h-4"/>
                <p className="text-emerald-500 font-bold">Everyone can reply</p>
            </div>
          </div>
          <DialogFooter>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5 dark:text-neutral-400 text-neutral-800">
                    <Image className="w-5 h-5 cursor-pointer" />
                    <ImagePlay className="w-5 h-5 cursor-pointer" />
                    <Sparkles className="w-5 h-5 cursor-pointer" />
                    <Smile className="w-5 h-5 cursor-pointer" />
                    <CalendarClock className="w-5 h-5 cursor-pointer" />
                    <MapPin className="w-5 h-5 cursor-pointer" />
                    <Flag className="w-5 h-5 cursor-pointer" />

                </div>
                <div className="flex items-center gap-2">
                    <Circle className="w-5 h-5 cursor-pointer dark:text-neutral-400 text-neutral-800"/>
                    <hr className="h-6 w-0.5 bg-neutral-600" />
                    <CirclePlus className="w-5 h-5 cursor-pointer dark:text-neutral-400 text-neutral-800"/>
                    <Button 
                        onClick={() => {
                            if (!content.trim()) return;

                            addPost(content);
                            setContent("");
                        }}
                        type="submit" className="rounded-2xl px-4 py-4 font-bold bg-black dark:bg-white cursor-pointer md:block hidden">
                        Post
                    </Button>
                </div>
            </div>
          </DialogFooter>
        </DialogContent>
    )
}

export default AddPost;