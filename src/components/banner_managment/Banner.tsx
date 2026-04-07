import React from "react";
import CreateBanner from "./CreateBanner";
import BannerList from "./BannerList";


const Banner = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
        <CreateBanner />
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4 mb-8 rounded-b-2xl shadow-md">
        <BannerList />
      </div>
    </div>
  );
};

export default Banner;
