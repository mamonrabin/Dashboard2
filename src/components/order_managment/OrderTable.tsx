import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeliverSeleotor } from "./DeliverSeleotor";
import { Printer } from "lucide-react";
import OrderView from "./OrderView";
import CommonPagination from "../common_use/Common_Pagination";

const OrderTable = () => {
  return (
    <div>
      <Table>
        <TableHeader className="bg-[#6767E7]">
          <TableRow className="text-white!">
            <TableHead className="text-white">SL</TableHead>
            <TableHead className="text-white">Order ID</TableHead>
            <TableHead className="text-white">Products</TableHead>
            <TableHead className="text-white">Quantity</TableHead>
            <TableHead className="text-white">Subtotal</TableHead>
            <TableHead className="text-white">Coupon Code</TableHead>
            <TableHead className="text-white">Coupon Discount</TableHead>
            <TableHead className="text-white">Shipping</TableHead>
            <TableHead className="text-white">Total</TableHead>
            <TableHead className="text-white">Payment</TableHead>
            <TableHead className="text-white">Customer</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Delivery Option</TableHead>
            <TableHead className="text-white">Send to Courier</TableHead>
            <TableHead className="text-white">Invoice</TableHead>
            <TableHead className="text-white">Delete</TableHead>
            <TableHead className="text-white">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>ORD-2602286023</TableCell>
            <TableCell className="bg-[#e8ebf1]">
              <p>Title: Product-01</p>
              <p>Price: ৳700 * 2</p>
              <p>Color: Yellow</p>
              <p>Size: XL</p>
            </TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">৳1400</TableCell>
            <TableCell className="text-center">Eid Fanta</TableCell>
            <TableCell className="text-center">৳80</TableCell>
            <TableCell className="text-center">৳60</TableCell>
            <TableCell className="text-center">৳1380</TableCell>
            <TableCell className="text-center">COD</TableCell>

            <TableCell className="bg-[#e8ebf1]">
              <p>Name: Immran Hossin</p>
              <p>Email: immran@example.com</p>
              <p>Phone: 01712345678</p>
              <p>Address: Dhaka, Bangladesh</p>
            </TableCell>
            <TableCell className="text-center">OrderPlaced</TableCell>
            <TableCell className="text-center">
              <DeliverSeleotor />
            </TableCell>
            <TableCell>
              <button className="bg-[#6767E7] hover:bg-[#8757E8] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                Stedfast
              </button>
            </TableCell>

            <TableCell>
              <div
                //   onClick={handlePrint}
                className="cursor-pointer bg-[#6767E7] hover:bg-[#8757E8] duration-300 text-white px-4 py-2 rounded text-sm"
              >
                <Printer size={20} />
              </div>
              <div className="hidden">
                {/* <OrderInvoice order={order} inventory={inventory} ref={invoiceRef}/> */}
              </div>
            </TableCell>

            <TableCell>
              <button
                //   onClick={() => handleDelete(order._id)}
                className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm"
              >
                Delete
              </button>
            </TableCell>
            <TableCell>
              <OrderView />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>ORD-2602286024</TableCell>
            <TableCell className="bg-[#e8ebf1]">
              <p>Title: Animal Print three Pices</p>
              <p>Price: ৳700 * 5</p>
              <p>Color: Yellow</p>
              <p>Size: XL</p>
            </TableCell>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center">৳3500</TableCell>
            <TableCell className="text-center">Eid Fanta</TableCell>
            <TableCell className="text-center">৳80</TableCell>
            <TableCell className="text-center">৳60</TableCell>
            <TableCell className="text-center">৳1380</TableCell>
            <TableCell className="text-center">COD</TableCell>

            <TableCell className="bg-[#e8ebf1]">
              <p>Name: Menna Begum</p>
              <p>Email: menna@email.com</p>
              <p>Phone: 01712345678</p>
              <p>Address:Mirpur-1, house-05,road 04, Dhaka, Bangladesh</p>
            </TableCell>
            <TableCell className="text-center">OrderPlaced</TableCell>
            <TableCell className="text-center">
              <DeliverSeleotor />
            </TableCell>
            <TableCell>
              <button className="bg-[#6767E7] hover:bg-[#8757E8] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                Stedfast
              </button>
            </TableCell>

            <TableCell>
              <div
                //   onClick={handlePrint}
                className="cursor-pointer bg-[#6767E7] hover:bg-[#8757E8] duration-300 text-white px-4 py-2 rounded text-sm"
              >
                <Printer size={20} />
              </div>
              <div className="hidden">
                {/* <OrderInvoice order={order} inventory={inventory} ref={invoiceRef}/> */}
              </div>
            </TableCell>

            <TableCell>
              <button
                //   onClick={() => handleDelete(order._id)}
                className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm"
              >
                Delete
              </button>
            </TableCell>
            <TableCell>
              <OrderView />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="py-4 ">
        <CommonPagination />
      </div>
    </div>
  );
};

export default OrderTable;
