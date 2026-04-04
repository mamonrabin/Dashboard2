"use client";

import * as React from "react";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CouponSubCategory() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Coupon Sub Category <span className="text-red-600">*</span>
      </p>

      <Select>
        <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Coupon Sub Category" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-sm">
            <SelectLabel>Coupon Sub Category</SelectLabel>

            <SelectItem value="dd">sub-cat-01</SelectItem>
            <SelectItem value="gg">sub-cat-02</SelectItem>
            <SelectItem value="sss">sub-cat-03</SelectItem>
            <SelectItem value="ggfgf">sub-cat-04</SelectItem>
            <SelectItem value="ddd">sub-cat-05</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
