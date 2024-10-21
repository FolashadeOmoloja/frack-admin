"use client";

import DashboardNavbar from "@/components/Navbar/Navbar";
import CompanyProfile from "@/components/Profile/HireTalentProfile";
import { useSelector } from "react-redux";

const page = ({ params }: { params: { myJobsId: string } }) => {
  const { company } = useSelector((store: any) => store.company);
  return (
    <main className="bg-[#F4F5F7] pb-28">
      <DashboardNavbar activeItem={0} />
      <CompanyProfile user={company} />
    </main>
  );
};

export default page;
