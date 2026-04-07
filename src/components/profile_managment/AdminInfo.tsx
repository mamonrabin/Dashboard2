import React from 'react';
import profielimage from "@/src/assets/product/vprofile.jpg";
import Image from 'next/image';
const AdminInfo = () => {
    return (
        <div className='flex items-center gap-4'>
        <div className='w-20 h-20'>
            <Image src={profielimage} alt='image' width={200} height={200} className='w-full h-full rounded-full'/>
        </div>

        <div>
            <h2 className='font-bold text-lg'>Al Mamon</h2>
            <p className='text-sm text-gray-500'>Chief Executive Officer (C.E.O)</p>
            <p className='text-sm text-gray-500'>Dhaka, Bangladesh</p>
        </div>
        </div>
    );
};

export default AdminInfo;