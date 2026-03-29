import { ClipboardMinus, DollarSign, Package, ShoppingBag, ShoppingBasket } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div className="-mt-10">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#636262]">Total Sales</p>
            <p className="bg-[#616ae72d] p-1 rounded text-[#6169E7]">
              <ShoppingBasket size={20} />
            </p>
          </div>

          <p className="text-2xl font-bold">৳18,645</p>
          <div className="flex items-center justify-between mt-4 pb-2">
            <p className="text-[10px] text-[#6768E7] font-medium bg-[#6767e734] px-2 rounded-full">
              +24%
            </p>
            <p className="text-[12px] text-[#616060] underline hover:text-[#6768E7] duration-300 cursor-pointer">
              view more
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#636262]">Total Orders</p>
            <p className="bg-[#49b6f528] p-1 rounded text-[#49B6F5]">
              <ShoppingBag size={20} />
            </p>
          </div>

          <p className="text-2xl font-bold">650</p>
          <div className="flex items-center justify-between mt-4 pb-2">
            <p className="text-[10px] text-[#49B6F5] font-medium bg-[#49b6f528] px-2 rounded-full">
              +24%
            </p>
            <p className="text-[12px] text-[#616060] underline hover:text-[#49B6F5] duration-300 cursor-pointer">
              view more
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#636262]">Total Stock</p>
            <p className="bg-[#8857e92a] p-1 rounded text-[#8857E9]">
              <ClipboardMinus size={20} />
            </p>
          </div>

          <p className="text-2xl font-bold">20996</p>
          <div className="flex items-center justify-between mt-4 pb-2">
            <p className="text-[10px] text-[#8857E9] font-medium bg-[#8857e92a] px-2 rounded-full">
              +24%
            </p>
            <p className="text-[12px] text-[#616060] underline hover:text-[#8857E9] duration-300 cursor-pointer">
              view more
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <div className="bg-white shadow  px-4 py-6 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#636262]">Stock Value</p>
            <p className="bg-[#e6533c2a] p-1 rounded text-[#E6533C]">
              <Package size={20} />
            </p>
          </div>

          <p className="text-2xl font-bold">৳3,26,924</p>
          <div className="flex items-center justify-between mt-4 pb-2">
            <p className="text-[10px] text-[#E6533C] font-medium bg-[#e6533c2a] px-2 rounded-full">
              +24%
            </p>
            <p className="text-[12px] text-[#616060] underline hover:text-[#E6533C] duration-300 cursor-pointer">
              view more
            </p>
          </div>
        </div>


        <div className="bg-white shadow px-4 py-6 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#636262]">Total Expenses</p>
            <p className="bg-[#6568E72a] p-1 rounded text-[#6568E7]">
              <DollarSign size={20} />
            </p>
          </div>

          <p className="text-2xl font-bold">৳73,579</p>
          <div className="flex items-center justify-between mt-4 pb-2">
            <p className="text-[10px] text-[#6568E7] font-medium bg-[#6568E72a] px-2 rounded-full">
              +24%
            </p>
            <p className="text-[12px] text-[#616060] underline hover:text-[#6568E7] duration-300 cursor-pointer">
              view more
            </p>
          </div>
        </div>
        
      </div>

      
    </div>
  );
};

export default Overview;
