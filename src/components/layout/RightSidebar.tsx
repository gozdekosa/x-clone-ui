import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Ellipsis, Search, X } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";

const RightSidebar = () => {
  return (
    <div className="">
        <div className="fixed top-0 z-10 w-[calc(350px-2rem)]">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search"
              className="pl-9 py-6 rounded-4xl bg-white dark:bg-black"
            />
          </div>
        </div>
        <Card className="w-full max-w-sm bg-transparent p-2 py-4 mt-16">
          <CardHeader>
            <CardTitle className="text-xl">Subscribe to Premium</CardTitle>
            <CardDescription className="text-dark dark:text-white font-light my-2">
              Get rid of ads, see your analytics, boost your replies and unlock 20+ features.
            </CardDescription>
            <Button className="bg-blue-500 text-white w-min text-md rounded-4xl p-4 py-5">
              Subscribe
            </Button>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm bg-transparent p-2 py-4 mt-4">
          <CardHeader>
            <CardTitle className="text-xl">Today’s News</CardTitle>
            <CardAction>
              <X className="w-4"/>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="py-4">
              <p>
              Turkish Series 'Eşref Rüya' Ends with Emotional Finale
              </p>
              <div className="flex items-cente pt-2">
                <AvatarGroup>
                  <Avatar className="w-5 h-5">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <p className="ml-3 font-light text-xs text-gray-800 dark:text-gray-400">1 day ago · Entertainment · 12.2K posts</p>
              </div>
            </div>
            <div className="py-4">
              <p>
              BYD Pauses $1 Billion Turkey EV Factory Two Years After Deal
              </p>
              <div className="flex items-cente pt-2">
                <AvatarGroup>
                  <Avatar className="w-5 h-5">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <p className="ml-3 font-light text-xs text-gray-800 dark:text-gray-400">1 day ago · Entertainment · 12.2K posts</p>
              </div>
            </div>
            <div className="py-4">
              <p>
              Ukrainian Soldiers Airlift Mother Cat and Kittens from Frontline
              </p>
              <div className="flex items-cente pt-2">
                <AvatarGroup>
                  <Avatar className="w-5 h-5">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
                <p className="ml-3 font-light text-xs text-gray-800 dark:text-gray-400">1 day ago · Entertainment · 12.2K posts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm bg-transparent p-2 py-4 mt-4">
          <CardHeader>
            <CardTitle className="text-xl">What’s happening</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="py-4">
              <div className="flex items-cente flex place-content-between">
                <p className="font-light text-xs text-gray-800 dark:text-gray-400">Music · Trending</p>
                <Ellipsis className="font-light text-xs text-gray-800 dark:text-gray-400"/>
              </div>
              <p>
              Yıldız Tilbe
              </p>
            </div>
            <div className="py-4">
              <div className="flex items-cente flex place-content-between">
                <p className="font-light text-xs text-gray-800 dark:text-gray-400">Sports · Trending</p>
                <Ellipsis className="font-light text-xs text-gray-800 dark:text-gray-400"/>
              </div>
              <p>
              Oliver Kahn
              </p>
            </div>
            <div className="py-4">
              <div className="flex items-cente flex place-content-between">
                <p className="font-light text-xs text-gray-800 dark:text-gray-400">Music · Trending</p>
                <Ellipsis className="font-light text-xs text-gray-800 dark:text-gray-400"/>
              </div>
              <p>
              Yıldız Tilbe
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm bg-transparent p-2 py-4 mt-4">
          <CardHeader>
            <CardTitle className="text-xl">Who to follow</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="flex items-center py-4 ">
                  <div className="flex items-center w-full cursor-pointer">
                      <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>

                      <div className="ml-4">
                      <p className="text-sm">Selda Bağcan</p>
                      <p className="text-sm text-gray-800 dark:text-gray-400">
                          @gozdekosa
                      </p>
                      </div>

                      <div className="ml-auto">
                      <Button className="rounded-4xl">Follow</Button>
                      </div>
                  </div>
              </div>
              <div className="flex items-center py-4 ">
                  <div className="flex items-center w-full cursor-pointer">
                      <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>

                      <div className="ml-4">
                      <p className="text-sm">Selda Bağcan</p>
                      <p className="text-sm text-gray-800 dark:text-gray-400">
                          @gozdekosa
                      </p>
                      </div>

                      <div className="ml-auto">
                      <Button className="rounded-4xl">Follow</Button>
                      </div>
                  </div>
              </div>
              <div className="flex items-center py-4">
                  <div className="flex items-center w-full cursor-pointer">
                      <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>

                      <div className="ml-4">
                      <p className="text-sm">Selda Bağcan</p>
                      <p className="text-sm text-gray-800 dark:text-gray-400">
                          @gozdekosa
                      </p>
                      </div>

                      <div className="ml-auto">
                      <Button className="rounded-4xl">Follow</Button>
                      </div>
                  </div>
              </div>
              <Link href="#"><p className="pt-2 text-blue-400">Show more</p></Link>
          </CardContent>
        </Card>
        <div className="pt-3 my-4">
          <hr/>
        </div>
        <div className="px-2">
          <p className="text-xs/8 font-light text-gray-500 tracking-wide">Terms of Service
          |
          Privacy Policy
          |
          Cookie Policy
          |
          Imprint
          |
          Accessibility
          |
          Ads info
          |

          More
          © 2026 X Corp.
          </p>
        </div>
    </div>
    );
}

export default RightSidebar;