
"use client";

import { Upload } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";


interface CategoryFormData {
  title: string;
  image: FileList;
}

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>();

 

  const onSubmit: SubmitHandler<CategoryFormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="md:p-8 p-6 pb-12">
      <h2 className="text-xl font-medium">Create Category</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="flex lg:flex-row flex-col gap-6 items-start">
          
         
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">
              Category title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="px-4 py-2 border rounded text-sm outline-none"
              placeholder="Enter Category Name"
              {...register("title", { required: "Category title is required" })}
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Image */}
          <div className="flex flex-col gap-2 w-full max-w-xs">
            <label className="text-sm font-medium">
              Image <span className="text-red-500">*</span>
            </label>

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center h-32 border border-dashed rounded-xl cursor-pointer hover:border-[#6469E7] transition"
            >
              <Upload size={18} />
              <p className="text-sm text-gray-500 mt-2">Upload image</p>
            </label>

            <input
              type="file"
              id="fileUpload"
              className="hidden"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
            />

            {errors.image && (
              <p className="text-xs text-red-500">{errors.image.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
         
          className="mt-6 px-6 py-2 bg-[#6768E7] text-white rounded hover:bg-[#8858E9] transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CategoryCreate;
