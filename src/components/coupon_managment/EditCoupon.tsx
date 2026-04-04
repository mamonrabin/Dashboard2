"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import DatePicker from "react-datepicker";

import { SquarePen } from "lucide-react";

const EditCoupon = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#6768E7] hover:bg-[#8858E9] duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
            <SquarePen size={16} />
          </button>
        </SheetTrigger>
        <SheetContent className="md:max-w-2xl">
          <div className="p-6">
            <h2 className="text-lg font-medium border-b pb-2">Edit Coupon</h2>

            <form className="mt-4">
              <div className="flex lg:flex-row flex-col items-start gap-4">
                {/* Coupon Code */}
                <div className="flex flex-col gap-2 md:w-50 w-full">
                  <label className="text-sm">
                    Coupon Code<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="px-4 py-2 border outline-none text-sm rounded"
                    type="text"
                    placeholder="Enter Coupon Code"
                  />
                </div>

                {/* Discount Type */}
                <div>{/* <CouponDiscountType /> */}</div>

                {/* Discount Amount */}
                <div className="flex flex-col gap-2 md:w-50 w-full">
                  <label className="text-sm">Discount Amount</label>
                  <input
                    className="px-4 py-2 border outline-none text-sm rounded"
                    type="text"
                    placeholder="Enter discount amount"
                  />
                </div>

                {/* Use Limit */}
                <div className="flex flex-col gap-2 md:w-50 w-full">
                  <label className="text-sm">Use Limit</label>
                  <input
                    className="px-4 py-2 border outline-none text-sm rounded"
                    type="text"
                    placeholder="Enter use limit"
                  />
                </div>

                {/* Start Date */}
              </div>

              <div className="mt-4 flex gap-4">
                <div className="flex flex-col gap-2 md:w-50 w-full">
                  <label className="text-sm">
                    Start Date<span className="text-red-500"></span>
                  </label>
                  <DatePicker
                    placeholderText="Start Date"
                    className="w-full px-4 py-2 border outline-none text-sm rounded"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>

                <div className="flex flex-col gap-2 md:w-50 w-full">
                  <label className="text-sm">
                    End Date<span className="text-red-500"></span>
                  </label>
                  <DatePicker
                    placeholderText="End Date"
                    className="w-full px-4 py-2 border outline-none text-sm rounded"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>

                <div>{/* <CouponType/> */}</div>
              </div>

              {/* Submit */}
              <button
                className="mt-6 px-6 py-2 bg-[#7163E8] text-white rounded hover:bg-[#8957E9] transition cursor-pointer"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default EditCoupon;
