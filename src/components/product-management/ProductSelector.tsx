import React from "react";
import { CategorySelector } from "../order_managment/CategorySelector";
import { SubCategorySelector } from "../order_managment/SubCategorySelector";
import { BrandSelector } from "../order_managment/BrandSelector";
import { RangeSelector } from "../order_managment/RangeSelector";
import Link from "next/link";
import { FilePlus } from "lucide-react";

const ProductSelector = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-500 md:hidden xl:flex">
          Total Products 120
        </h2>
        <Link href="products/create-product">
          <div className="px-6 py-3 inline-flex items-center justify-right rounded rounded-tr-2xl bg-[#6569E8] hover:bg-[#8957E9] duration-300 text-white text-sm cursor-pointer">
            <button className="uppercase text-sm font-medium flex items-center gap-1 cursor-pointer">
              Add Product
              <FilePlus size={16} />
            </button>
          </div>
        </Link>
      </div>

      <div className="md:flex hidden lg:flex-nowrap flex-wrap items-center justify-end mt-4 gap-2">
        <CategorySelector />
        <SubCategorySelector />
        <BrandSelector />
        <RangeSelector />
      </div>
    </div>
  );
};

export default ProductSelector;
