"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuList } from "@/src/utils/menu-list";
import { useSidebar } from "@/src/context/Sidebar_Context";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Menu() {
  const { isOpen } = useSidebar();
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  // State to track which menus are expanded
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-screen overflow-y-scroll custom-scrollbar bg-[#1C2C3F] text-white transition-all duration-200 ease-linear ${
        isOpen ? "w-60" : "w-20"
      } pt-5`}
    >
      <ul className="mt-18 pb-4 px-4 flex flex-col gap-4">
        {menuList.map(({ groupLabel, menus }, index) => (
          <li key={index}>
            {/* Group Label */}
            {groupLabel && isOpen && (
              <p className="text-[10px] font-light text-[#ffffff6e] tracking-widest uppercase pb-6">
                {groupLabel}
              </p>
            )}
            {groupLabel && !isOpen && (
              <span className="w-2 h-2 ml-2.5 rounded-full bg-[#ffffff6e] mb-4 block"></span>
            )}

            {/* Menu Items */}
            <div className="flex flex-col gap-2">
              {menus.map(({ href, active, label, icon: Icon, submenus }, idx) => {
                const isExpanded = expandedMenus[label] || false;

                return (
                  <div key={idx}>
                    {/* Main Menu Button */}
                    {submenus.length > 0 ? (
                      <button
                        onClick={() => toggleMenu(label)}
                        className={`flex items-center justify-between w-full cursor-pointer rounded-md p-1 duration-300 ${
                          active ? "text-white" : "text-[#ffffff80]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={isOpen ? 16 : 18} />
                          {isOpen && <span className="capitalize text-sm">{label}</span>}
                        </div>
                        {isOpen && (
                          <span>
                            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </span>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={href}
                        className={`flex items-center gap-2 rounded-md p-1 duration-300 ${
                          active ? "text-white" : "text-[#ffffff80]"
                        }`}
                      >
                        <Icon size={isOpen ? 16 : 18} />
                        {isOpen && <span className="capitalize text-sm">{label}</span>}
                      </Link>
                    )}

                    {/* Submenus */}
                    {submenus.length > 0 && isExpanded && isOpen && (
                      <div className="ml-6 flex flex-col gap-2 mt-1">
                        {submenus.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            className={`text-sm font-light duration-300 ${
                              sub.active ? "text-white" : "text-[#ffffff80]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
