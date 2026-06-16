import ThemeToggle from "@/components/layout/ThemeToggle";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ChevronRight, Search } from "lucide-react";

const SettingsPage = () => {
  return (
    <>
      <main className="min-h-screen flex-1">
        <div className="p-4">
          <p className="text-xl font-bold">Settings</p>
        </div>
        <div className="relative w-full px-2">
            <Search className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search Settings"
              className="pl-9 py-6 rounded-4xl bg-white dark:bg-black"
            />
        </div>
        <div>
          <ul className="mt-2 text-sm">
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Your Account 
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Monetization
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Premium
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Creator Subscriptions
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Security and account access
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Privacy and safety
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Notifications
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Accessibility, display and languages
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Additional resources
              <ChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between py-3 px-4 cursor-pointer dark:hover:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-950">
              Help Center
              <ChevronRight className="text-gray-500" />
            </li>
          </ul>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[550px] border-l dark:border-neutral-900 border-neutral-200">
        <div className="p-4 flex items-center gap-8">
          <ArrowLeft/><p className="text-xl font-bold">Display</p>
        </div>
        <div className="relative w-full px-4">
          <p className="text-xs text-muted-foreground">
            Manage your font size, color, and background. These settings affect all the X accounts on this browser.
          </p>
        </div>
        <div className="mt-4 border-t dark:border-neutral-900 border-neutral-200">
          <p className="text-xl font-bold p-4">Display</p>
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}

export default SettingsPage;