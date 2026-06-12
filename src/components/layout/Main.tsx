import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ArrowUpFromLine, Bookmark, ChartNoAxesColumnIncreasing, Heart, MessageCircle, Repeat2 } from "lucide-react";

const Main = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
        <div className="sticky top-0 z-10 h-14 bg-background/60 backdrop-blur-md">
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
                className="rounded-none h-40"
            />
            </div>

            {Array.from({ length: 15 }).map((_, i) => (
            <div  key={i} className="flex px-5 py-3 border-b border-neutral-900 hover:cursor-pointer hover:bg-neutral-950">
                <div className="profile-img">
                    <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                </div>
                <div className="pl-3">
                    <div className="pb-2">
                    <p className="font-bold text-md">
                        düz tekir{" "}
                        <span className="font-light dark:text-neutral-400 text-neutral-900">
                        @karapatililer · Jun 11
                        </span>
                    </p>
                    </div>

                    <div>
                    <p>
                        Marketteki kedi beni mama reyonuna goturup mama aldirdi. Kasada kediyle
                        beraber beklerken, kasiyer kediyi gostererek "onun icin aliyorsaniz
                        mamasi var kapida, yalan soyluyor" dedi. Kedinin kasiyere nasil baktigini
                        gormeliydiniz. Kediler ahlakimizi taklit etmeye baslamis 😄
                    </p>
                    </div>

                    <div className="flex justify-between pt-1">
                        <div className="flex items-center gap-1 text-neutral-400 hover:text-blue-400 group cursor-pointer">
                            <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                <MessageCircle className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs -ms-2">38</span>
                        </div>

                        <div className="flex items-center gap-1 text-neutral-400 hover:text-green-400 group cursor-pointer">
                            <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                                <Repeat2 className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs -ms-2">397</span>
                        </div>

                        <div className="flex items-center gap-1 text-neutral-400 hover:text-pink-400 group cursor-pointer">
                            <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                                <Heart className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs -ms-2">30K</span>
                        </div>

                        <div className="flex items-center gap-1 text-neutral-400 hover:text-blue-400 group cursor-pointer">
                            <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                <ChartNoAxesColumnIncreasing className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs -ms-2">360K</span>
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
            ))}
            
        </TabsContent>

        <TabsContent value="analytics">
            <p>tab2</p>
        </TabsContent>
    </Tabs>
    );
}

export default Main;