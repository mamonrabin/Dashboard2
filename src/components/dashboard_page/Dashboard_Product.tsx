import React from "react";
import MostSellingProducts from "./Most_Selling_Products";
import TopRatedProduct from "./Top_Rated_Product";
import LessSellingProducts from "./Less_Selling_Products";

const DashboardProduct = () => {
  return (
    <div className="mt-4 pb-6">
      <div className="grid lg:grid-cols-2 gap-4">
        <MostSellingProducts />
        <TopRatedProduct />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <LessSellingProducts/>
        <TopRatedProduct />
      </div>
    </div>
  );
};

export default DashboardProduct;
