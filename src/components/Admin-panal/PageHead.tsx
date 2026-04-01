import { ChevronRight } from "lucide-react";

import React from "react";

const PageHead = ({ title }: { title: string }) => {
  return (
    <div className="bg-linear-to-r from-[#5D6BE7] to-[#8A56E9]  py-2 lg:px-3 px-1 text-white">
      <div className="lg:px-4 px-2 flex md:flex-row flex-col items-center justify-between pb-20 pt-6">
        <h2 className="capitalize lg:text-xl md:text-base text-sm">{title}</h2>
        <div className="flex items-center md:gap-1 capitalize md:text-sm text-[12px] font-semibold text-gray-300">
          <p>dashboard</p>
          <p>
            <ChevronRight size={16} />
          </p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHead;
