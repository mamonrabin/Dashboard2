import React from "react";
import CreateBrand from "./CreateBrand";
import BrandList from "./BrandList";


const Brand = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
        <CreateBrand/>
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4  rounded-b-2xl shadow-md">
        <BrandList/>
      </div>
    </div>
  );
};

export default Brand;
