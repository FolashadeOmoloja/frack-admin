"use client";

import DashboardNavbar from "@/components/Navbar/Navbar";

import { useSelector } from "react-redux";

const page = ({ params }: { params: { myJobsId: string } }) => {
  const { blogPost } = useSelector((store: any) => store.blogPost);
  return (
    <main className="bg-[#F4F5F7] pb-28">
      <DashboardNavbar activeItem={1} />
    </main>
  );
};

export default page;
