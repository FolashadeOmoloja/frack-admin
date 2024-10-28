"use client";

import { useEffect } from "react";
import BlogTable from "@/components/ManageBlogs/BlogTable";
import DashboardNavbar from "@/components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Page = () => {
  const { user } = useSelector((store: any) => store.auth);
  const router = useRouter();

  useEffect(() => {
    if (user?.accountRole !== "SuperAdmin") {
      toast.error("You are unauthorized");
      router.push("/control-room");
    }
  }, [user, router]);

  return (
    <>
      <DashboardNavbar activeItem={1} />
      <BlogTable />
    </>
  );
};

export default Page;
