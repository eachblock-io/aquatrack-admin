import SingleDashboard from "@/components/SingleDashboard";
import React from "react";

const SingleDashboardPage = ({ params }: any) => {
  return (
    <div>
      <SingleDashboard userid={params?.userid} />
    </div>
  );
};

export default SingleDashboardPage;
