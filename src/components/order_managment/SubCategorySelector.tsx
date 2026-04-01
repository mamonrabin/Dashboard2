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

import { TCategory } from "@/src/types/category";
import { categoryList } from "@/src/api/categoryApi";




export function SubCategorySelector() {
  
  return (
    <Select>

      <SelectTrigger className="w-45 h-10! rounded py-1 bg-[#6967E7] text-white!">
        <SelectValue placeholder="Select Sub Category" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="text-sm">
          <SelectLabel>Sub Category</SelectLabel>
          {categoryList?.map((category: TCategory) => (
            <SelectItem
              key={category._id}
              className="text-sm"
              value={category._id}
            >
              {category.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
