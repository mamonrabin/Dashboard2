
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

export function CouponCategory() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Coupon Category <span className="text-red-600">*</span>
      </p>

      <Select>
            <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
              <SelectValue placeholder="Select Coupon Category" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup className="text-sm">
                <SelectLabel>Coupon Category</SelectLabel>

                <SelectItem value="bb">category-01</SelectItem>
                <SelectItem value="dd">category-02</SelectItem>
                <SelectItem value="ddd">category-03</SelectItem>
                <SelectItem value="ddd">category-04</SelectItem>
                <SelectItem value="ddd">category-05</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
  );
}
