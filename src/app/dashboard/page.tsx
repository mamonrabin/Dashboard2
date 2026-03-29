import PageHead from "@/src/components/Admin-panal/PageHead";
import Dashboard from "@/src/components/dashboard_page/Dashboard";
import React from "react";

const page = () => {
  return (
    <div className="">
      <PageHead title="Dashboard" />

      <Dashboard />
    </div>
  );
};

export default page;
