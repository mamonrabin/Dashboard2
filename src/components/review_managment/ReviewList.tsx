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

import ViewReview from "./ViewReview";

const ReviewList = () => {
  return (
    <div className="">
      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#6D64E7]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white">User/Email</TableHead>
              <TableHead className="text-white">Rating</TableHead>
              <TableHead className="text-white">Comment</TableHead>
              <TableHead className="text-white">product</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="px-4">1</TableCell>
              <TableCell className="uppercase">mamon@gmail.com</TableCell>

              <TableCell>4.5 star</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              </TableCell>

              <TableCell className="">Lorem ipsum</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <ViewReview />
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell className="px-4">2</TableCell>
              <TableCell className="uppercase">Al Mamon</TableCell>

              <TableCell>4.5 star</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              </TableCell>

              <TableCell className="">Lorem ipsum</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <ViewReview />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">2</TableCell>
              <TableCell className="uppercase">Al Mamon</TableCell>

              <TableCell>4.5 star</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              </TableCell>

              <TableCell className="">Lorem ipsum</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <ViewReview />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">3</TableCell>
              <TableCell className="uppercase">rabin@gmail.com</TableCell>

              <TableCell>4.5 star</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              </TableCell>

              <TableCell className="">Lorem ipsum</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <ViewReview />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">4</TableCell>
              <TableCell className="uppercase">rabin@gmail.com</TableCell>

              <TableCell>4.5 star</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              </TableCell>

              <TableCell className="">Lorem ipsum</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <ViewReview />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4">5</TableCell>
              <TableCell className="uppercase">MD.Rabin</TableCell>

              <TableCell>4.5 star</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              </TableCell>

              <TableCell className="">Lorem ipsum</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
                  <Trash size={16} />
                </button>

                <ViewReview />
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

export default ReviewList;
