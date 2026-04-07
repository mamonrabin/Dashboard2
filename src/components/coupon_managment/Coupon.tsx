import React from "react";


import CcreateCoupon from "./CreateCoupon";
import CouponList from "./CouponList";


const Coupon = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
        <CcreateCoupon />
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4 mb-8  rounded-b-2xl shadow-md">
        <CouponList />
      </div>
    </div>
  );
};

export default Coupon;
