/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Upload } from "lucide-react";

import Image from "next/image";


export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Preview state
  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);
  const [extraPreviews, setExtraPreviews] = useState<string[]>([]);

  

  const onSubmit = (data:any) => {
        console.log("Form Data:", data);
  };

  return (
    <div className="md:py-8 md:px-6 px-4 py-6 pb-12">
      <h2 className="text-xl font-medium">Create Product</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-6"
      >
        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Product Name <span className="text-red-600">*</span>
          </label>
          <input
            {...register("name", { required: "Product name is required" })}
            className="px-3 py-2 border rounded"
            placeholder="Enter product name"
          />
          
        </div>
        {/* Product short description  */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Product Short Details <span className="text-red-600">*</span>
          </label>
          <input
            {...register("short_details", {
              required: "Product short details is required",
            })}
            className="px-3 py-2 border rounded"
            placeholder="Enter product short details"
          />
          
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Product Description <span className="text-red-600">*</span>
          </label>
          {/* <Controller
            name="description"
            control={control}
            rules={{ required: "Description required" }}
            render={({ field }) => (
              <TiptapEditor value={field.value} onChange={field.onChange} />
            )}
          /> */}
          
        </div>

        {/* Product Images */}
        <div className="flex md:flex-row flex-col md:items-center gap-6">
          {/* Front Image */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Front-view image <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="frontImage"
              className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
            >
              {frontPreview ? (
                <Image
                  src={frontPreview}
                  alt="Front Preview"
                  width={500}
                  height={500}
                  className="object-cover w-full h-32 rounded"
                />
              ) : (
                <div className="flex flex-col text-gray-500 items-center text-center p-4">
                  <Upload size={16} />
                  <p className="text-sm text-gray-500 mt-2">upload image</p>
                </div>
              )}
            </label>
            <input
              type="file"
              id="frontImage"
              accept="image/*"
              className="hidden"
              
            />
          </div>

          {/* Back Image */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Back-view image</label>
            <label
              htmlFor="backImage"
              className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
            >
              {backPreview ? (
                <Image
                  src={backPreview}
                  alt="Back Preview"
                  width={500}
                  height={500}
                  className="object-cover w-full h-32 rounded"
                />
              ) : (
                <div className="flex flex-col text-gray-500 items-center text-center p-4">
                  <Upload size={16} />
                  <p className="text-sm text-gray-500 mt-2">upload image</p>
                </div>
              )}
            </label>
            <input
              type="file"
              id="backImage"
              accept="image/*"
              className="hidden"
              
            />
          </div>

          {/* Extra Images */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Extra images (Max 5)</label>
            <label
              htmlFor="extraImages"
              className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
            >
              {extraPreviews.length > 0 ? (
                <div className="flex gap-2 overflow-x-auto p-2">
                  {extraPreviews.map((preview, i) => (
                    <Image
                      key={i}
                      src={preview}
                      width={500}
                      height={500}
                      alt={`Extra ${i}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col text-gray-500 items-center text-center p-4">
                  <Upload size={16} />
                  <p className="text-sm text-gray-500 mt-2">upload images</p>
                </div>
              )}
            </label>
            <input
              type="file"
              id="extraImages"
              accept="image/*"
              multiple
              className="hidden"
              
            />
          </div>
        </div>

        {/* MRP, Discount, Shipping */}
        <div className="flex gap-4">
          <input
            {...register("mrp", { required: "MRP required" })}
            placeholder="MRP"
            className="border px-3 py-2 rounded"
          />
          {/* <Controller
            name="discountType"
            control={control}
            render={({ field }) => (
              <DiscountType value={field.value} onChange={field.onChange} />
            )}
          /> */}
          <input
            {...register("discount")}
            placeholder="Discount"
            className="border px-3 py-2 rounded"
          />
          {/* <Controller
            name="shipping"
            control={control}
            render={({ field }) => (
              <ShippingFee value={field.value} onChange={field.onChange} />
            )}
          /> */}
        </div>

        {/* Category, SubCategory, Brand */}
        <div className="flex gap-4">
          {/* <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <CCategorySelector
                value={field.value}
                onChange={field.onChange}
              />
            )}
          /> */}
          {/* <Controller
            name="subCategory"
            control={control}
            render={({ field }) => (
              <SCCategorySelector
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <BrandSelector value={field.value} onChange={field.onChange} />
            )}
          /> */}
        </div>

        <div>
          {/* <Controller
            name="labels"
            control={control}
            render={({ field }) => (
              <LabelSelector value={field.value} onChange={field.onChange} />
            )}
          /> */}
        </div>

        {/* Inventory Type */}
        {/* <CreateInventeryType
          control={control}
          register={register}
          watch={watch}
        /> */}

        <button
         
          className="px-6 py-3 bg-[#2B748A] text-white rounded mt-4"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
