import React from "react";
import CategoryCreate from "./CategoryCreate";
import CategoryList from "./CategoryList";

const Category = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
        <CategoryCreate />
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4 mb-8 rounded-b-2xl shadow-md">
        <CategoryList />
      </div>
    </div>
  );
};

export default Category;
