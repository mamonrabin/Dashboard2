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

type DiscountTypeProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export function DiscountType({ value, onChange }: DiscountTypeProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">
        Discount Type <span className="text-red-600"></span>
      </p>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Discount Type" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-sm">
            <SelectLabel>Discount Type</SelectLabel>

            <SelectItem value="flat">Flat</SelectItem>
            <SelectItem value="percentage">Percentage</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
