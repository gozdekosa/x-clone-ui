import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "../ui/avatar";
import PostCard from "../tweet/PostCard";
import { posts } from "@/data/posts";

const Main = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
        <div className="sticky top-0 z-10 md:h-14 h-25 bg-background/60 backdrop-blur-md">
        <div className="md:hidden pt-3 pl-3 flex">
            <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h5 className="pl-5 font-bold text-lg">Home</h5>
        </div>
        

        <TabsList className="w-full grid grid-cols-2" variant="line">
            <TabsTrigger value="overview" className="font-bold rounded-none p-4">
            For you
            </TabsTrigger>

            <TabsTrigger value="analytics" className="rounded-none p-4">
            Following
            </TabsTrigger>
        </TabsList>
        </div>

        <TabsContent value="overview">
            <div>
            <Input
                placeholder="What's happining?"
                className="rounded-none h-35"
            />
            </div>

            {posts.map((post) => (
            <PostCard key={post.id} post={post} />
            ))}
            
        </TabsContent>

        <TabsContent value="analytics">
            <p>tab2</p>
        </TabsContent>
    </Tabs>
    );
}

export default Main;