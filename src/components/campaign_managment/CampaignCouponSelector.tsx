
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

export function CampaignCouponSelector() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Coupon <span className="text-red-600"> *</span>
      </p>
      <Select
       
      >
        <SelectTrigger className="w-full h-10 rounded">
          <SelectValue placeholder="Select Coupon" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-sm">
            <SelectLabel>Coupon</SelectLabel>

            <SelectItem value="cuo-0">coupon-1</SelectItem>
            <SelectItem value="cuo-2">coupon-2</SelectItem>
            <SelectItem value="cuo-3">coupon-3</SelectItem>
            <SelectItem value="cuo-4">coupon-4</SelectItem>
            <SelectItem value="cuo-5">coupon-5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
