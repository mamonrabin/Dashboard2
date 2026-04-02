
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SquarePen, Upload } from "lucide-react";

const EditBrand = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="bg-[#6768E7] hover:bg-[#8858E9] duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
            <SquarePen size={16} />
          </button>
        </SheetTrigger>

        <SheetContent className="md:max-w-2xl">
          <div className="p-6">
            <h2 className="text-lg font-medium border-b pb-2">Edit Brand</h2>

            <form className="mt-4">
              <div className="flex lg:flex-row flex-col items-start gap-4">
                {/* Title */}
                <div className="flex flex-col gap-1 md:w-120 w-full">
                  <label>
                    Brand Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="px-4 py-2 border outline-none text-sm rounded"
                    type="text"
                    placeholder="Enter Brand Name"
                  />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Image</label>

                  <label
                    htmlFor="fileUpload"
                    className="flex flex-col items-center justify-center w-40 h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
                  >
                    <Upload size={16} />
                    <p className="text-sm text-gray-500 mt-2">
                      Upload new image
                    </p>
                  </label>

                  <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>

              <button
                className="mt-6 px-6 py-2 bg-[#6768E7] hover:bg-[#8858E9] text-white rounded transition cursor-pointer"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default EditBrand;
