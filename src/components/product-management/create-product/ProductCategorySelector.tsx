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

export function ProductCategorySelector() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Category <span className="text-red-600">*</span>
      </p>

      <Select>
        <SelectTrigger className="md:w-75 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-sm">
            <SelectLabel>Category</SelectLabel>

            <SelectItem value="option1">Category 1</SelectItem>
            <SelectItem value="option2">Category 2</SelectItem>
            <SelectItem value="option3">Category 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
