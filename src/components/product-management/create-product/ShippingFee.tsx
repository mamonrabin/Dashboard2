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

type ShippingFeeProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export function ShippingFee({ value, onChange }: ShippingFeeProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">
        Free Shipping <span className="text-red-600"></span>
      </p>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Shipping" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-sm">
            <SelectLabel>Shipping</SelectLabel>

            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
