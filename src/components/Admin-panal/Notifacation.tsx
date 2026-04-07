import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, X } from "lucide-react";

const Notifacation = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-8 h-8 rounded  flex items-center justify-center relative cursor-pointer">
          <p>
            <Bell size={20} />
          </p>
          <p className="w-3 h-3 rounded-full bg-[#49B6F5] absolute top-1 right-1.5 flex items-center justify-center text-[10px] text-white">
            5
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-120 mr-3.5 rounded">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Notifications</h2>
            <p className="text-[12px] text-red-400">5 Unread</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex justify-between">
            <div>
              <h2>Notifications-01</h2>
              <p className="line-clamp-1 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <X size={14} className="text-gray-500" />
              <p className="text-[10px] text-gray-500">1 minutes ago</p>
            </div>
          </div>
            <div className="flex justify-between">
            <div>
              <h2>Notifications-02</h2>
              <p className="line-clamp-1 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col gap-1">
               <X size={14} className="text-gray-500" />
              <p className="text-[10px] text-gray-500">2 minutes ago</p>
            </div>
          </div>
            <div className="flex justify-between">
            <div>
              <h2>Notifications-03</h2>
              <p className="line-clamp-1 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col gap-1">
               <X size={14} className="text-gray-500" />
              <p className="text-[10px] text-gray-500">2 minutes ago</p>
            </div>
          </div>
            <div className="flex justify-between">
            <div>
              <h2>Notifications-04</h2>
              <p className="line-clamp-1 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <X size={14} className="text-gray-500" />
              <p className="text-[10px] text-gray-500">3 minutes ago</p>
            </div>
          </div>

          <div>
            <button className="w-full bg-[#6568E7] text-white py-2 rounded mt-4">
              View All
            </button>
          </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifacation;
