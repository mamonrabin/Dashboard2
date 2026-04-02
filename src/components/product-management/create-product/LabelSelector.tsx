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

export function LabelSelector() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Labels <span className="text-red-600">*</span>
      </p>

      <Select>
        <SelectTrigger className="md:w-70 w-full h-10 rounded py-1">
          <SelectValue placeholder="Select Label" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-sm">
            <SelectLabel>Labels</SelectLabel>
            <SelectItem className="text-sm" value="New">
              New
            </SelectItem>
            <SelectItem className="text-sm" value="Trending">
              Trending
            </SelectItem>
            <SelectItem className="text-sm" value="Limited_Stock">
              Limited Stock
            </SelectItem>
            <SelectItem className="text-sm" value="Sale">
              Sale
            </SelectItem>
            <SelectItem className="text-sm" value="Featured">
              Featured
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
