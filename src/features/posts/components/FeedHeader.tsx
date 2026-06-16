import MobileSidebar from "@/components/layout/MobileSidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const FeedHeader = () => {
  return (

    <div className="sticky top-0 z-10 md:h-14 h-25 bg-background/60 backdrop-blur-md">
        <div className="md:hidden pt-3 pl-3 flex">
            <MobileSidebar />
            <h5 className="pl-5 font-bold text-lg">Home</h5>
        </div>
        

        <TabsList className="w-full grid grid-cols-2" variant="line">
            <TabsTrigger value="overview" className="font-bold rounded-none p-4 cursor-pointer">
            For you
            </TabsTrigger>

            <TabsTrigger value="analytics" className="rounded-none p-4 cursor-pointer">
            Following
            </TabsTrigger>
        </TabsList>
    </div>

    );
};

export default FeedHeader;