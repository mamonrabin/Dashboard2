
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
import CommonPagination from "../common_use/Common_Pagination";
import Image from "next/image";

const ProductsList = () => {
  return (
    <div className="mt-8">
      <Table>
        <TableHeader className="bg-[#6967E7]">
          <TableRow className="text-white!">
            <TableHead className="text-white">SL</TableHead>
            <TableHead className="text-white">Back-View</TableHead>
            <TableHead className="text-white">Front-View</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">Discount Type</TableHead>
            <TableHead className="text-white">Discount</TableHead>
            <TableHead className="text-white">MRP</TableHead>
            <TableHead className="text-white">Price</TableHead>
            <TableHead className="text-white">Inventory Type</TableHead>
            <TableHead className="text-white">Inventory Details</TableHead>
            <TableHead className="text-white">Quantity</TableHead>
            <TableHead className="text-white">Category</TableHead>
            <TableHead className="text-white">Subcategory</TableHead>
            <TableHead className="text-white">Brand</TableHead>
            <TableHead className="text-white">Delete</TableHead>
            <TableHead className="text-white">Update</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
              <TableCell className="text-center">1</TableCell>
              <TableCell className="text-center">
                <Image
                  src={shirt}
                  alt="front"
                  width={60}
                  height={60}
                />
              </TableCell>
              <TableCell className="text-center">
                <Image
                  src={shirt}
                  alt="backview"
                  width={60}
                  height={60}
                />
              </TableCell>

              <TableCell className="text-center">product-01</TableCell>
              <TableCell className="text-center">
                Flat
              </TableCell>
              <TableCell className="text-center">
                ৳ 50
              </TableCell>
              <TableCell className="text-center">
                ৳ 500
              </TableCell>
              <TableCell className="text-center">
                ৳ 450
              </TableCell>
              <TableCell className="text-center">
                colorSize
              </TableCell>
              <TableCell className="text-sm p-1 grid grid-cols-2 gap-1 w-105">
               
                  <div className="border p-2 bg-gray-200">
                    <div>
                      <p>Size : xl</p>
                      <p>Color : red</p>
                      <p className="">Quantity 18</p>
                    </div>

                    <div>
                      <p className=" text-[#6967E7]">
                        Sold Quantity 08
                      </p>
                      <p className=" text-orange-500">
                        Hold Quantity 10
                      </p>
                    </div>
                  </div>
              
              </TableCell>

              <TableCell className="text-center">12</TableCell>

              <TableCell className="text-center">
                category-01
              </TableCell>
              <TableCell className="text-center">
                subCategory-01
              </TableCell>
              <TableCell className="text-center">
                brand-1
              </TableCell>

              <TableCell>
                <button
                //   onClick={() => handleDelete(Product._id)}
                  className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm"
                >
                  Delete
                </button>
              </TableCell>
              <TableCell>
                {/* <ProductUpdate /> */}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>

      <div className="py-4 ">
        <CommonPagination/>
      </div>
    </div>
  );
};

export default ProductsList;
