import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import { orderList } from "@/src/api/orderApi";
const RecentOrder = () => {
  return (
    <div className="bg-white shadow p-4 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Top Selling Products</h2>
        <p className="text-[12px] font-medium cursor-pointer capitalize underline text-[#525252] hover:text-[#6867E7] duration-300">
          view more
        </p>
      </div>

      <Table className="mt-4">
        <TableHeader className="border-b-2 text-[12px]">
          <TableRow>
            <TableHead>SL</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Payment method</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orderList?.map((order, index: number) => (
            <TableRow key={order?.id || index}>
              <TableCell className="">
                {String(index + 1).padStart(2, "0")}
              </TableCell>

              <TableCell className="">
                <Image
                  src={order?.image || "/placeholder.png"}
                  alt={order?.title || "order"}
                  width={50}
                  height={50}
                  className="rounded object-cover"
                />
              </TableCell>

              <TableCell className="uppercase">{order?.title}</TableCell>

              <TableCell className="">{order?.orderID}</TableCell>
              <TableCell className="">৳{order?.price}</TableCell>
              <TableCell className="">{order?.date}</TableCell>
              <TableCell className="capitalize text-[12px]">{order?.paymentmethod}</TableCell>
              <TableCell className="text-[12px]">{order?.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentOrder;
