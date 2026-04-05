import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { SquarePen, Upload } from "lucide-react";

const UpdateBlog = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#6768E7] hover:bg-[#8858E9] duration-300 cursor-pointer text-white px-2 py-2 rounded text-sm">
            <SquarePen size={16} />
          </button>
        </SheetTrigger>
        <SheetContent className="md:max-w-2xl">
          <div className="p-6">
            <h2 className="text-lg font-medium border-b pb-2">Edit Blog</h2>

            <form className="mt-4 ">
              <div className="flex lg:flex-row flex-col items-start gap-4">
                <div className="flex flex-col gap-2 md:w-120 w-full">
                  <label className="text-sm">
                    Blog Title <span className="text-red-500"></span>
                  </label>
                  <input
                    className="px-4 py-2 border outline-none text-sm rounded"
                    type="text"
                    placeholder="Enter banner title"
                  />
                </div>
                <div>{/* <BlogType /> */}</div>
              </div>

              <div className="flex flex-col gap-2 mt-4 w-full">
                <label className="text-sm">
                  Blog Description <span className="text-red-500"></span>
                </label>
                <textarea
                  className="px-4 w-full py-2 border outline-none text-sm rounded"
                  cols={10}
                  rows={6}
                  placeholder="Enter banner description"
                ></textarea>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label className="font-medium text-sm">
                  Blog Image <span className="text-red-500"> *</span>
                </label>

                <label
                  htmlFor="fileUpload"
                  className="flex flex-col items-center justify-center w-full h-40 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
                >
                  <div className="flex flex-col text-gray-500 items-center text-center p-4">
                    <Upload size={16} />

                    <p className="text-sm text-gray-500 mt-2">upload image</p>
                  </div>
                </label>

                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <div className="">
                <button
                  className="mt-6 px-6 py-2 bg-[#6768E7] hover:bg-[#8858E9] text-white rounded transition cursor-pointer"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UpdateBlog;
