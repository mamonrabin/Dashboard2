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
import { categoryList } from "@/src/api/categoryApi";




export function ProductSubCategorySelector() {
 

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Sub Category <span className="text-red-600"></span>
      </p>

      <Select >
        <SelectTrigger className="md:w-75 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Sub Category" />
        </SelectTrigger>

       <SelectContent className="">
               <SelectGroup className="text-sm">
                 <SelectLabel>Sub Category</SelectLabel>
                 {categoryList?.map((category) => (
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
    </div>
  );
}
