/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Upload } from "lucide-react";
import React, { useState } from "react";
import { useForm} from "react-hook-form";

import Image from "next/image";
import TiptapEditor from "../product-management/create-product/TiptapEditor";

interface BlogFormData {
  title: string;
  description: string;
  image: FileList;
  images: FileList;
}

const CreateBlogs = () => {
  const [mainPreview, setMainPreview] = useState<string | null>(null);
  const [optionalPreview, setOptionalPreview] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormData>();

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="md:p-8 p-6 pb-12">
      <h2 className="text-xl font-medium">Create Blog</h2>

      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div>
            <label>Blog Title *</label>
            <input
              className="px-4 py-2 border rounded w-full"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          {/* Description */}
          <div>
            <label>Description *</label>

            <TiptapEditor />
          </div>

          {/* Images */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Main Image */}
            <div>
              <label>Main Image *</label>

              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center h-32 border border-dashed rounded cursor-pointer"
              >
                <Upload size={16} />
                Upload image
              </label>

              <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const files = e.target.files;
                      const file = files?.[0];
                      if (file) {
                        if (mainPreview) URL.revokeObjectURL(mainPreview);
                        setMainPreview(URL.createObjectURL(file));
                      }
                    }}
                  />

              {errors.image && (
                <span className="text-red-500">
                  {errors.image.message as string}
                </span>
              )}

              {mainPreview && (
                <Image
                  src={mainPreview}
                  alt="preview"
                  width={400}
                  height={200}
                  className="h-28 object-cover mt-2 rounded"
                />
              )}
            </div>

            {/* Optional Images */}
            <div>
              <label>Optional Images</label>

              <label
                htmlFor="images"
                className="flex flex-col items-center justify-center h-32 border border-dashed rounded cursor-pointer"
              >
                <Upload size={16} />
                Upload images
              </label>

              <input
                    type="file"
                    id="images"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const files = e.target.files;

                      optionalPreview.forEach((url) =>
                        URL.revokeObjectURL(url),
                      );

                      if (files) {
                        const previews = Array.from(files).map((file) =>
                          URL.createObjectURL(file),
                        );
                        setOptionalPreview(previews);
                      }
                    }}
                  />

              <div className="grid grid-cols-3 gap-2 mt-2">
                {optionalPreview.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="preview"
                    width={200}
                    height={100}
                    className="h-16 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="">
          <button
            className="mt-6 px-6 py-2 bg-[#6369E7] text-white rounded hover:bg-[#8857E8] transition cursor-pointer"
            type="submit"
          >
            Create Blog 
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogs;
