import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { productList } from "@/src/api/productsApi";
import Image from "next/image";
const MostSellingProducts = () => {
  return (
    <div className="bg-white shadow p-4 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Top Rated Products</h2>
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
            <TableHead>stock</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {productList?.slice(0,5).map((product, index: number) => (
            <TableRow key={product?.id || index}>
              <TableCell className="">
                {String(index + 1).padStart(2, "0")}
              </TableCell>

              <TableCell className="">
                <Image
                  src={product?.image || "/placeholder.png"}
                  alt={product?.title || "product"}
                  width={50}
                  height={50}
                  className="rounded object-cover"
                />
              </TableCell>

              <TableCell className="uppercase">{product?.title}</TableCell>

              <TableCell className="">{product?.stok}</TableCell>
              <TableCell className="">৳{product?.mrpPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MostSellingProducts;
