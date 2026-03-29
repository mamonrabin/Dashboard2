"use client";

import { useSidebar } from "@/src/context/Sidebar_Context";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminPanelLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();
  return (
    <div className="flex h-screen overflow-hidden">
  
      {/* Sidebar */}
      <aside className={`${isOpen ? "w-60" : "w-20"} transition-all duration-200 ease-linear`}>
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className={`flex-1 h-full overflow-y-auto no-scrollbar bg-[#EDEEF1]`}>
        <Header/>
        {children}
      </main>
    </div>
  );
};

export default AdminPanelLayout;
