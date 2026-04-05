/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Upload } from "lucide-react";

import { useForm } from "react-hook-form";
import { BannerType } from "./BannerType";




const CreateBanner = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

 

  const onSubmit = async (data:any) => {
    console.log(data);
  };
  return (
    <div className="md:p-8 p-6 pb-12">
      <h2 className="text-xl font-medium">Create Banner</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
        <div className="flex lg:flex-row flex-col items-start gap-4">
          <div className="flex flex-col gap-2 md:w-120 w-full">
            <label className="text-sm">
              Banner Title <span className="text-red-500"></span>
            </label>
            <input
              {...register("title")}
              className="px-4 py-2 border outline-none text-sm rounded"
              type="text"
              placeholder="Enter banner title"
            />
          </div>
          <div>
            <BannerType/>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <label className="text-sm">
            Banner Description <span className="text-red-500"></span>
          </label>
          <textarea
           {...register("description")}
            className="px-4 w-full py-2 border outline-none text-sm rounded"
            cols={10}
            rows={6}
            placeholder="Enter banner description"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-medium text-sm">
            Banner Image <span className="text-red-500"> *</span>
          </label>

          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-40 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#6369E7] transition"
          >
            <div className="flex flex-col text-gray-500 items-center text-center p-4">
              <Upload size={16} />

              <p className="text-sm text-gray-500 mt-2">upload image</p>
            </div>
          </label>

          <input
          {...register("image", { required: "Image is required" })}
            type="file"
            id="fileUpload"
            className="hidden"
            accept="image/*"
          />
        </div>
        <div className="">
          <button
            className="mt-6 px-6 py-2 bg-[#6369E7] text-white rounded hover:bg-[#8857E8] transition cursor-pointer"
            type="submit"
          >
            Create Banner 
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBanner;
