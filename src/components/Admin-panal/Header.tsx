import { useSidebar } from "@/src/context/Sidebar_Context";
import { Bell, Search, TextAlignJustify } from "lucide-react";
import React from "react";

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
            <div className="w-8 h-8 rounded  flex items-center justify-center relative">
              <p>
                <Bell size={20} />
              </p>
              <p className="w-2.5 h-2.5 rounded-full bg-[#49B6F5] absolute top-1 right-1.5"></p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#ffffff1f] flex items-center justify-center">
              <h2 className="font-medium">A</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
