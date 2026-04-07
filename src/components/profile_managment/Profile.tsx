
import React from "react";
import AdminInfo from "./AdminInfo";
import AdminDetails from "./AdminDetails";



const Profile = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-4 bg-white -mt-7 rounded-t-2xl shadow">
        <AdminInfo />
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4 mb-8  rounded-b-2xl shadow-md">
        <AdminDetails />
      </div>
    </div>
  );
};

export default Profile;
