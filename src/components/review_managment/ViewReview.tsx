import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Eye } from "lucide-react";

const ViewReview = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#6768E7] hover:bg-[#8858E9] duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
            <Eye size={16} />
          </button>
        </SheetTrigger>
        <SheetContent className="md:max-w-2xl">
          <div className="p-6">
            <h2 className="text-lg font-medium border-b pb-2">View Review</h2>

            <p className="mt-8">this is a simple view for the review</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ViewReview;
