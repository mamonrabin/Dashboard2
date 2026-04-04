import React from "react";
import CreateCampaing from "./CreateCampaing";
import CampaingList from "./CampaingList";




const Campaign = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
        <CreateCampaing />
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4  rounded-b-2xl shadow-md">
        <CampaingList />
      </div>
    </div>
  );
};

export default Campaign;
