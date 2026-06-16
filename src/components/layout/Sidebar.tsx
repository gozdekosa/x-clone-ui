import { Bell, Bookmark, Settings, Ellipsis, GitFork, Home, MessageCircle, Rocket, Search, UserPlus, UserRound } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function AppSidebar() {

  return (
    <div className='h-screen flex flex-col justify-between'>
        <div className="mt-4 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-black dark:text-white"
            >
                <path d="M18.244 2H21l-6.52 7.46L22 22h-6.827l-5.35-6.993L3.7 22H1l7.02-8.03L2 2h6.93l4.86 6.41L18.244 2Zm-1.2 18h1.87L7.07 3.9H5.07L17.044 20Z"/>
            </svg>
        </div>
        <div className="">
            <ul className="space-y-2 mb-2">
                <Link href="/">
                    <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                        <Home />
                        <span className="text-xl">Home</span>
                    </li>
                </Link>

                <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <Search />
                    <span className="text-xl">Explore</span>
                </li>

                <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <Bell />
                    <span className="text-xl">Notifications</span>
                </li>

                <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <UserPlus />
                    <span className="text-xl">Follow</span>
                </li>

                <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <MessageCircle />
                    <span className="text-xl">Chat</span>
                </li>

                <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <GitFork />
                    <span className="text-xl">Grok</span>
                </li>

                <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <Bookmark />
                    <span className="text-xl">Bookmarks</span>
                </li>

                <li className="hidden min-[1800px]:flex items-center gap-4 py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <Rocket />
                    <span className="text-xl">Creator Studio</span>
                </li>

                <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                    <UserRound />
                    <span className="text-xl">Profile</span>
                </li>

                <Link href="/settings">
                    <li className="flex items-center gap-4  py-3 rounded-full dark:hover:bg-neutral-900 hover:bg-neutral-300 cursor-pointer transition-colors px-4">
                        
                        <Settings />
                        <span className="text-xl">Settings</span>
                    
                    </li>
                </Link>
            </ul>
            <Button className="w-full rounded-4xl text-lg font-bold py-6 cursor-pointer mt-2">Post</Button>
        </div>
        <div className="flex items-center pb-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <div className="flex items-center w-full cursor-pointer pb-3 px-4">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>

                    <div className="ml-4">
                    <p className="text-sm">gozdelinko</p>
                    <p className="text-sm text-gray-800 dark:text-gray-400">
                        @gozdekosa
                    </p>
                    </div>

                    <div className="ml-auto">
                    <Ellipsis />
                    </div>
                </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                side="top"
                align="end"
                sideOffset={28}
                >
                <DropdownMenuGroup>
                    <DropdownMenuItem className="py-3 cursor-pointer">
                    Add an existing account
                    </DropdownMenuItem>
                    <DropdownMenuItem className="py-3 cursor-pointer">
                    Log out @gozdekosa
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}