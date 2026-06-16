import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { AppSidebar } from "./Sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden p-2">
           <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[275px] p-0 bg-white dark:bg-black">
        <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>

        <AppSidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar