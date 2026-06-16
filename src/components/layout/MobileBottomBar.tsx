import { Home, MessageCircle, Search, Sparkles, UserPlus } from "lucide-react";
import Link from "next/link";

const MobileBottomBar = () => {
    return (
        <div className="">
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex flex-col items-center">
                    <Link href="/">
                    <Home className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    <span className="text-xs text-gray-800 dark:text-gray-300 sr-only">Home</span>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Search className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    <span className="text-xs text-gray-800 dark:text-gray-300 sr-only">Explore</span>
                </div>
                <div className="flex flex-col items-center">
                    <Sparkles className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    <span className="text-xs text-gray-800 dark:text-gray-300 sr-only">Grok</span>
                </div>
                <div className="flex flex-col items-center">
                    <UserPlus className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    <span className="text-xs text-gray-800 dark:text-gray-300 sr-only">Follow</span>
                </div>
                <div className="flex flex-col items-center">
                    <MessageCircle className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    <span className="text-xs text-gray-800 dark:text-gray-300 sr-only">Chat</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MobileBottomBar;