import React from "react";
import logo from "@/src/assets/images/logo/desktop-dark.png";
import responsiveLogo from "@/src/assets/images/logo/respomsive_logo.png";
import Image from "next/image";
import Menu from "./Menu";
import { useSidebar } from "@/src/context/Sidebar_Context";
import Link from "next/link";

const Sidebar = () => {
  const { isOpen } = useSidebar();
  return (
    <div className={`overflow-y-auto no-scrollbar  h-screen text-white`}>
      <div>
        <Link href="/dashboard">
          <div
            className={`flex items-center border-b border-[#ffffff1f] justify-center bg-[#1C2C3F] ${isOpen ? "pt-4.5" : "pt-4.25"} transition-all duration-200 ease-in-out  relative z-50`}
          >
            {isOpen ? (
              <Image
                src={logo}
                alt="Logo"
                width={500}
                height={500}
                className="w-32 h-auto mb-5"
              />
            ) : (
              <Image
                src={responsiveLogo}
                alt="Logo"
                width={300}
                height={300}
                className="w-10 h-auto mb-5"
              />
            )}
          </div>
        </Link>

        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
