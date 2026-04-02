"use client";
import shirt from "@/src/assets/product/product.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { categorysList } from "@/src/api/categoriesApi";
import Image from "next/image";

import CommonPagination from "../common_use/Common_Pagination";

import { Trash } from "lucide-react";
import EditBrand from "./EditBrand";


const BrandList = () => {
  return (
    <div className="">
      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#6D64E7]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white">Brand Name</TableHead>
              <TableHead className="text-white">Brand Image</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="px-4">1</TableCell>
              <TableCell className="uppercase">brand-01</TableCell>

              <TableCell>
                <Image
                  src={shirt}
                  alt="brand-01"
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
              </TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditBrand />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">2</TableCell>
              <TableCell className="uppercase">brand-02</TableCell>

              <TableCell>
                <Image
                  src={shirt}
                  alt="brand-02"
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
              </TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditBrand />
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell className="px-4">3</TableCell>
              <TableCell className="uppercase">brand-03</TableCell>

              <TableCell>
                <Image
                  src={shirt}
                  alt="brand-03"
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
              </TableCell>

              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <EditBrand />
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

export default BrandList;
