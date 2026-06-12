import { Bell, Bookmark, CircleEllipsis, Ellipsis, GitFork, HandCoins, Home, MessageCircle, Rocket, Search, UserPlus, UserRound } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AppSidebar() {
    const XIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
    >
        <path d="M18.244 2H21l-6.52 7.46L22 22h-6.827l-5.35-6.993L3.7 22H1l7.02-8.03L2 2h6.93l4.86 6.41L18.244 2Zm-1.2 18h1.87L7.07 3.9H5.07L17.044 20Z"/>
    </svg>
);

  return (
    <div className='h-screen flex flex-col justify-between'>
        <div className="mt-5"><XIcon className="text-black dark:text-white" /></div>
        <div className="space-y-6 pr-4">
            <ul className="space-y-7">
                <li className="flex"><Home/><span className="ml-4 text-xl"> Home</span></li>
                <li className="flex"><Search/><span className="ml-4 text-xl"> Explore</span></li>
                <li className="flex"><Bell/><span className="ml-4 text-xl"> Notifications</span></li>
                <li className="flex"><UserPlus/><span className="ml-4 text-xl"> Follow</span></li>
                <li className="flex"><MessageCircle/><span className="ml-4 text-xl"> Chat</span></li>
                <li className="flex"><GitFork/><span className="ml-4 text-xl"> Grok</span></li>
                <li className="flex"><Bookmark /><span className="ml-4 text-xl"> Bookmarks</span></li>
                <li className="flex"><Rocket/><span className="ml-4 text-xl"> Creator Studio</span></li>
                <li className="flex"><HandCoins/><span className="ml-4 text-xl"> Premium</span></li>
                <li className="flex"><UserRound/><span className="ml-4 text-xl"> Profile</span></li>
                <li className="flex"><CircleEllipsis/><span className="ml-4 text-xl"> More</span></li>
            </ul>
            <Button className="w-full rounded-4xl text-lg font-bold py-7 cursor-pointer">Post</Button>
        </div>
        <div className="flex items-center pb-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <div className="flex items-center w-full cursor-pointer pb-3">
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