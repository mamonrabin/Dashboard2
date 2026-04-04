/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useForm} from "react-hook-form";


import { CouponDiscountType } from "./CouponDiscountType";
import { CouponType } from "./CouponType";

import { DatePicker } from "antd";

const CcreateCoupon = () => {
  const { register, handleSubmit} = useForm();

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="md:p-8 p-6 pb-12">
      <h2 className="text-xl font-medium">Create Coupon</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {/* Coupon Code */}
          <div className="flex flex-col gap-2  w-full">
            <label className="text-sm">
              Coupon Code<span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter Code"
              {...register("code", { required: "Coupon code is required" })}
              className="px-4 py-2 border rounded"
            />
          </div>

          <div className="w-full">
            <CouponDiscountType />
          </div>

          {/* Discount */}
          <div className="flex flex-col gap-2  w-full">
            <label className="text-sm">Discount</label>
            <input
              placeholder="Enter Discount"
              {...register("discount", {
                valueAsNumber: true,
                required: "Required",
              })}
              type="number"
              className="px-4 py-2 border rounded"
            />
          </div>

          {/* Use Limit */}
          <div className="flex flex-col gap-2  w-full">
            <label className="text-sm">Use Limit</label>
            <input
              {...register("useLimit", { valueAsNumber: true })}
              type="number"
              placeholder="Use limit"
              className="px-4 py-2 border rounded"
            />
          </div>
        </div>

        <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {/* Per User */}
          <div className="flex flex-col gap-2  w-full">
            <label className="text-sm">Per User Limit</label>
            <input
              {...register("perUserLimit", { valueAsNumber: true })}
              type="number"
              placeholder="Per user"
              className="px-4 py-2 border rounded"
            />
          </div>

          {/* Start Date */}
          <div className="flex flex-col gap-2  w-full">
            <label className="text-sm">Start Date</label>
            <DatePicker
              className="px-4 py-2! border rounded w-full"
           
            />
          </div>

          {/* Expire Date */}
          <div className="flex flex-col gap-2  w-full">
            <label className="text-sm">Expire Date</label>
            <DatePicker
              className="px-4 py-2! border rounded w-full"
            
            />
          </div>

          <div className="w-full">
            <CouponType />
          </div>
        </div>

        {/* ✅ Conditional rendering */}

        {/* <div className="mt-4">
          <CouponCategory />
        </div>

        <div className="mt-4">
          <CouponSubCategory />
        </div>

        <div className="mt-4">
          <CouponBrand />
        </div> */}

        <button
          className="mt-6 px-6 py-2 bg-[#6768E7] hover:bg-[#8858E9] text-white rounded cursor-pointer"
          type="submit"
        >
          Create Coupon
        </button>
      </form>
    </div>
  );
};

export default CcreateCoupon;
