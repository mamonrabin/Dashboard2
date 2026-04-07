import React from "react";
import profielimage from "@/src/assets/product/vprofile.jpg";
import Image from "next/image";
import { Camera } from "lucide-react";
const EditProfile = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 h-20 relative">
        <Image
          src={profielimage}
          alt="image"
          width={200}
          height={200}
          className="w-full h-full rounded-full"
        />
        <div className="absolute bottom-0 right-0 w-6 h-6 text-center flex items-center justify-center border-2 border-white text-white rounded-full bg-[#8E54E9]">
          <Camera size={12} />
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg">Al Mamon</h2>
        <p className="text-sm text-gray-500">Chief Executive Officer (C.E.O)</p>
        <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default EditProfile;
