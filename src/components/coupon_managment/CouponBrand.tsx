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

export function CouponBrand() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Coupon Brand <span className="text-red-600">*</span>
      </p>

      
    <Select>
            <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
              <SelectValue placeholder="Select Coupon Brand" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup className="text-sm">
                <SelectLabel>Coupon Brand</SelectLabel>

                <SelectItem value="fff">brand-01</SelectItem>
                <SelectItem value="dd">brand-02</SelectItem>
                <SelectItem value="ee">brand-03</SelectItem>
                <SelectItem value="ggg">brand-04</SelectItem>
                <SelectItem value="ww">brand-05</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
    </div>
  );
}
