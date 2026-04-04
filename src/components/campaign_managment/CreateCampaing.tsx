/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";



import { Upload } from "lucide-react";

import { useForm } from "react-hook-form";
import { CampaignCouponSelector } from "./CampaignCouponSelector";


interface CampaignFormData {
  title: string;
  couponId: string;
  image: FileList;
}

const CreateCampaing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CampaignFormData>();



  const onSubmit = async (data:any) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="md:p-8 p-6 pb-12">
      <h2 className="text-xl font-medium">Create Campaign</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="flex lg:flex-row flex-col items-start gap-4">
          {/* Coupon Code */}
          <div className="flex flex-col gap-2 md:w-80 w-full">
            <label className="text-sm">
              Campaign Title<span className="text-red-500"> *</span>
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              className="px-4 py-2 border outline-none text-sm rounded"
              type="text"
              placeholder="Enter campaign title"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* coupon */}
          <div>
            <CampaignCouponSelector/>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="font-medium text-sm">
            Campaign Banner <span className="text-red-500"></span>
          </label>

          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-40 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#7163E8] transition"
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
          {errors.image && (
              <span className="text-red-500 text-sm">
                {errors.image.message}
              </span>
            )}
        </div>

        {/* Submit */}
        <button
         
          className="mt-6 px-6 py-2 bg-[#7163E8] text-white rounded hover:bg-[#8956E9] transition cursor-pointer"
          type="submit"
        >
          Start Campaign
        </button>
      </form>
    </div>
  );
};

export default CreateCampaing;
