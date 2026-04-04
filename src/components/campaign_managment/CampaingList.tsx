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
import EditCoupon from "../coupon_managment/EditCoupon";



const CampaingList = () => {
  return (
    <div className="">
      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#6D64E7]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white text-center">Campaign Title</TableHead>
              <TableHead className="text-white text-center">Coupon Code</TableHead>
              <TableHead className="text-white text-center">Coupon Discount</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="px-4">1</TableCell>
              <TableCell className="uppercase text-center">Eid damaka</TableCell>

              <TableCell className="text-center">eid2026</TableCell>
              <TableCell className="text-center">flat</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

           <TableRow>
              <TableCell className="px-4">2</TableCell>
              <TableCell className="uppercase text-center">Eid damaka</TableCell>

              <TableCell className="text-center">eid2026</TableCell>
              <TableCell className="text-center">flat</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">3</TableCell>
              <TableCell className="uppercase text-center">Eid damaka</TableCell>

              <TableCell className="text-center">eid2026</TableCell>
              <TableCell className="text-center">flat</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">4</TableCell>
              <TableCell className="uppercase text-center">Eid damaka</TableCell>

              <TableCell className="text-center">eid2026</TableCell>
              <TableCell className="text-center">flat</TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditCoupon />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">5</TableCell>
              <TableCell className="uppercase text-center">Eid damaka</TableCell>

              <TableCell className="text-center">eid2026</TableCell>
              <TableCell className="text-center">flat</TableCell>

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

export default CampaingList;
