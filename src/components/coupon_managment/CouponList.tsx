"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



import CommonPagination from "../common_use/Common_Pagination";
import { Trash } from "lucide-react";
import EditCoupon from "./EditCoupon";


const CouponList = () => {
  return (
    <div className="">
      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#6D64E7]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white">Coupon Code</TableHead>
              <TableHead className="text-white">Discount</TableHead>

              <TableHead className="text-white">Discount Type</TableHead>
              <TableHead className="text-white">Use Limit</TableHead>
              <TableHead className="text-white">Per User Limit</TableHead>
              <TableHead className="text-white">Use Count</TableHead>
              <TableHead className="text-white">Start Date</TableHead>
              <TableHead className="text-white">Expire Date</TableHead>
              <TableHead className="text-white">Coupon Type</TableHead>
              <TableHead className="text-white">Brand</TableHead>
              <TableHead className="text-white">Category</TableHead>
              <TableHead className="text-white">Subcategory</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="px-4">1</TableCell>
              <TableCell className="uppercase">category-02</TableCell>

              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">flat</TableCell>
              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">25</TableCell>
              <TableCell className="text-center">00</TableCell>
              <TableCell className="text-center">4/4/2026</TableCell>
              <TableCell className="text-center">4/28/2026</TableCell>
              <TableCell className="text-center">brand</TableCell>
              <TableCell className="text-center">brand-01</TableCell>
              <TableCell className="text-center">N/A</TableCell>
              <TableCell className="text-center">N/A</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">2</TableCell>
              <TableCell className="uppercase">category-02</TableCell>

              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">flat</TableCell>
              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">25</TableCell>
              <TableCell className="text-center">00</TableCell>
              <TableCell className="text-center">4/4/2026</TableCell>
              <TableCell className="text-center">4/28/2026</TableCell>
              <TableCell className="text-center">brand</TableCell>
              <TableCell className="text-center">brand-01</TableCell>
              <TableCell className="text-center">N/A</TableCell>
              <TableCell className="text-center">N/A</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

           <TableRow>
              <TableCell className="px-4">3</TableCell>
              <TableCell className="uppercase">category-02</TableCell>

              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">flat</TableCell>
              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">25</TableCell>
              <TableCell className="text-center">00</TableCell>
              <TableCell className="text-center">4/4/2026</TableCell>
              <TableCell className="text-center">4/28/2026</TableCell>
              <TableCell className="text-center">brand</TableCell>
              <TableCell className="text-center">brand-01</TableCell>
              <TableCell className="text-center">N/A</TableCell>
              <TableCell className="text-center">N/A</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

             <TableRow>
              <TableCell className="px-4">4</TableCell>
              <TableCell className="uppercase">category-02</TableCell>

              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">flat</TableCell>
              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">25</TableCell>
              <TableCell className="text-center">00</TableCell>
              <TableCell className="text-center">4/4/2026</TableCell>
              <TableCell className="text-center">4/28/2026</TableCell>
              <TableCell className="text-center">brand</TableCell>
              <TableCell className="text-center">brand-01</TableCell>
              <TableCell className="text-center">N/A</TableCell>
              <TableCell className="text-center">N/A</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

             <TableRow>
              <TableCell className="px-4">5</TableCell>
              <TableCell className="uppercase">category-02</TableCell>

              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">flat</TableCell>
              <TableCell className="text-center">100</TableCell>
              <TableCell className="text-center">25</TableCell>
              <TableCell className="text-center">00</TableCell>
              <TableCell className="text-center">4/4/2026</TableCell>
              <TableCell className="text-center">4/28/2026</TableCell>
              <TableCell className="text-center">brand</TableCell>
              <TableCell className="text-center">brand-01</TableCell>
              <TableCell className="text-center">N/A</TableCell>
              <TableCell className="text-center">N/A</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="py-4 ">
        <CommonPagination />
      </div>
    </div>
  );
};

export default CouponList;
