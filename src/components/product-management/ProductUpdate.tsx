"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useState } from "react";
import { Upload } from "lucide-react";

import Link from "next/link";
import TiptapEditor from "./create-product/TiptapEditor";
import { DiscountType } from "./create-product/DiscountType";
import { ShippingFee } from "./create-product/ShippingFee";
import { ProductCategorySelector } from "./create-product/ProductCategorySelector";
import { ProductSubCategorySelector } from "./create-product/ProductSubCategorySelector";
import { ProductBrabdSelector } from "./create-product/ProductBrabdSelector";
import { LabelSelector } from "./create-product/LabelSelector";
import { CreateInventeryType } from "./create-product/CreateInventeryType";

const ProductUpdate = () => {
  const [description, setDescription] = useState("");
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#6568E7] flex items-center gap-0.5 hover:bg-[#8957E9] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
            Update
          </button>
        </SheetTrigger>
        <SheetContent className="md:max-w-4xl p-8 overflow-y-auto">
          <h2>Product Details</h2>
          <form className="mt-4 flex flex-col gap-6">
            {/* Product Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Product Name <span className="text-red-600">*</span>
              </label>
              <input
                className="px-3 py-2 border rounded outline-none text-sm
            focus:border-[#6568E7] focus:ring-1 focus:ring-[#6568E7]"
                placeholder="Enter product name"
              />
            </div>

            {/* Product Description */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium">
                Product Description <span className="text-red-600">*</span>
              </label>

              <TiptapEditor />
            </div>
            {/* Product images */}
            <div className="flex md:flex-row flex-col md:items-center gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-medium">
                  Front-viwe image <span className="text-red-500">*</span>
                </label>

                <label
                  htmlFor="fileUpload"
                  className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#6568E7] transition"
                >
                  <div className="flex flex-col text-gray-500 items-center text-center p-4">
                    <Upload size={16} />

                    <p className="text-sm text-gray-500 mt-2">upload image</p>
                  </div>
                </label>

                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  accept="image/*"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">
                  Back-viwe image <span className="text-red-500"></span>
                </label>

                <label
                  htmlFor="fileUpload"
                  className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#6568E7] transition"
                >
                  <div className="flex flex-col text-gray-500 items-center text-center p-4">
                    <Upload size={16} />

                    <p className="text-sm text-gray-500 mt-2">upload image</p>
                  </div>
                </label>

                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  accept="image/*"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">
                  Extra images (Miximun 5 images){" "}
                  <span className="text-red-500"></span>
                </label>

                <label
                  htmlFor="fileUpload"
                  className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#6568E7] transition"
                >
                  <div className="flex flex-col text-gray-500 items-center text-center p-4">
                    <Upload size={16} />

                    <p className="text-sm text-gray-500 mt-2">upload image</p>
                  </div>
                </label>

                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>
            {/* Product mrp,discount,type,shpping */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm">MRP Price</label>
                <input placeholder="MRP" className="border px-3 py-2 rounded" />
              </div>
              <DiscountType />
              <div className="flex flex-col gap-1">
                <label className="text-sm">Discount</label>
                <input
                  placeholder="Discount"
                  className="border px-3 py-2 rounded"
                />
              </div>
              <ShippingFee />
            </div>

            {/* Product category,subcategory,childcatergory */}

            <div className="flex flex-wrap gap-4">
              <ProductCategorySelector />
              <ProductSubCategorySelector />
              <ProductBrabdSelector />
            </div>
            {/* Product inventry type */}
            <div>
              <LabelSelector />
            </div>

            {/* <CreateInventeryType /> */}

            <div>
              <Link href="/products">
                <input
                  className="px-6 py-3 bg-[#6E65E8] hover:bg-[#8957E9] duration-300 cursor-pointer text-white text-sm rounded"
                  type="submit"
                  value="Update Product"
                />
              </Link>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductUpdate;
