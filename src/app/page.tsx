"use client";

import { AppSidebar } from "@/components/layout/Sidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-7xl">
        {/* Left Sidebar */}
        <aside className="hidden md:block w-[275px]">
          <div className="fixed top-0 h-screen w-[275px] border-r border-neutral-900 px-4">
            <AppSidebar />
          </div>
        </aside>

        {/* Center Feed */}
        <main className="min-h-screen flex-1">
          <Main />
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:block w-[350px] border-l border-neutral-900 px-4">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
