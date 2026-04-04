import PageHead from '@/src/components/Admin-panal/PageHead';
import Coupon from '@/src/components/coupon_managment/Coupon';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Coupon List" />
            <Coupon/>
        </div>
    );
};

export default page;