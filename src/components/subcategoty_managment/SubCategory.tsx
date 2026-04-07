import React from "react";


import CreateSubCategory from "./CreateSubCategory";
import SubCategoryList from "./SubCategoryList";


const SubCategory = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
       <CreateSubCategory/>
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4 mb-8 rounded-b-2xl shadow-md">
        <SubCategoryList/>
      </div>
    </div>
  );
};

export default SubCategory;
