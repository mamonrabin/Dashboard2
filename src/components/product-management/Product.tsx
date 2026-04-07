import React from "react";
import ProductSelector from "./ProductSelector";
import ProductsList from "./ProductsList";


const Product = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
        <ProductSelector/>
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4 mb-8 rounded-b-2xl shadow-md">
       <ProductsList/>
      </div>
    </div>
  );
};

export default Product;
