import ReviewTable from "@/components/ManageReview/ReviewTable";
import DashboardNavbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardNavbar activeItem={0} />
      <ReviewTable />
    </>
  );
};

export default page;
