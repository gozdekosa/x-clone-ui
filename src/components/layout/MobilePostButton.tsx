import { SquarePen } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import AddPost from "@/features/posts/components/AddPost";

const MobilePostButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div className="md:hidden fixed bottom-20 right-4 z-50">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-lg transition-colors">
                    <SquarePen />
                </button>
            </div>
        </DialogTrigger>
        <AddPost />
    </Dialog>
  );
}

export default MobilePostButton;