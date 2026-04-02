import PageHead from "@/src/components/Admin-panal/PageHead";
import CreateProduct from "@/src/components/product-management/create-product/CreateProduct";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHead title="Create Product" />
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-10 rounded-t-2xl shadow">
        <CreateProduct />
      </div>
    </div>
  );
};

export default page;
