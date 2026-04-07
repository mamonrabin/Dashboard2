import { useSidebar } from "@/src/context/Sidebar_Context";
import {
  LogOut,
  Search,
  Settings,
  TextAlignJustify,
  UserRound,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Notifacation from "./Notifacation";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="bg-linear-to-r from-[#5D6BE7] to-[#8A56E9] sticky top-0  text-white z-50">
      <div className="border-b border-[#ffffff1f] py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={toggleSidebar}
              className="w-10 h-10 rounded-full hover:bg-[#ffffff1f] duration-300 cursor-pointer flex items-center justify-center"
            >
              <TextAlignJustify size={16} />
            </button>
            <div>
              <form className="flex items-center justify-center bg-[#ffffff1f] rounded-full px-4  py-2.5 lg:w-85 gap-2">
                <input
                  type="text"
                  className="outline-none text-sm font-medium w-full"
                  placeholder="Search for result.."
                />
                <p>
                  <Search size={18} />
                </p>
              </form>
            </div>
          </div>

          <div className="flex items-end justify-center gap-4">
            <Notifacation/>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <h2 className="w-8 h-8 cursor-pointer rounded-full bg-[#ffffff1f] flex items-center justify-center">
                    A
                  </h2>
                </PopoverTrigger>
                <PopoverContent className="w-40 mr-3.5 rounded">
                  <div className="flex flex-col gap-3">
                    <Link href="/profile">
                    <p className="flex items-center gap-2 cursor-pointer">
                      <span>
                        <UserRound size={16} />
                      </span>
                      <span>Profile</span>
                    </p>
                    </Link>
                    <Link href="/profile/setting">
                    <p className="flex items-center gap-2 cursor-pointer">
                      <span>
                        <Settings size={16} />
                      </span>
                      <span>Settings</span>
                    </p>
                    </Link>
                    <p className="flex items-center gap-2 cursor-pointer">
                      <span>
                        <LogOut size={16} />
                      </span>
                      <span>Logout</span>
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
