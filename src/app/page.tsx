"use client";

import { AppSidebar } from "@/components/layout/Sidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <>
      {/* Center Feed */}
      <main className="min-h-screen flex-1">
        <Main />
      </main>

      {/* Right Sidebar */}
      <aside className="hidden md:block w-[350px] border-l dark:border-neutral-900 border-neutral-200 px-4">
        <RightSidebar />
      </aside>
    </>
  );
}
