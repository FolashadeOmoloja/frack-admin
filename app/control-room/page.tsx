"use client";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import DashboardNavbar from "@/components/Navbar/Navbar";
import {
  useGetAllCompanies,
  useGetAllTalents,
} from "@/hooks/admin-analytics-hook";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const refresh = searchParams.get("refresh");

    if (refresh) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [searchParams]);

  const { talents } = useGetAllTalents();
  const { companies } = useGetAllCompanies();

  const filterTalents = (accountStatus: string) => {
    return talents.filter((talent) =>
      //@ts-ignore
      talent.accountStatus?.toLowerCase().includes(accountStatus.toLowerCase())
    );
  };
  const shortList = talents.length != 0 ? filterTalents("shortlist") : [];

  // // Function to filter jobs based on status
  // const filterJobs = (status: string) => {
  //   return jobs.filter((job) =>
  //     //@ts-ignore
  //     job.status?.toLowerCase().includes(status.toLowerCase())
  //   );
  // };

  // const openedJobs = jobs.length != 0 ? filterJobs("open") : [];
  // const closedJobs = jobs.length != 0 ? filterJobs("closed") : [];

  const companyAnalytics = [
    {
      analtyticsTitle: "Active Job Offers",
      stats: 123,
      desc: `Current active job listings`,
      link: "",
      linkName: "",
    },
    {
      analtyticsTitle: "Total Talents Registered",
      stats: talents.length != 0 ? talents.length : 0,
      desc: `${shortList.length} talents shortlisted on frack`,
      link: "/control-room/manage-talents",
      linkName: "Manage talents",
    },
    {
      analtyticsTitle: "Total Companies Registered",
      stats: companies.length != 0 ? companies.length : 0,
      desc: `${0} companies currently hiring`,
      link: "/control-room/manage-companies",
      linkName: "Manage Companies",
    },
    {
      analtyticsTitle: "Employed Talents",
      stats: 16,
      desc: "6 Job Categories",
      link: "",
      linkName: "",
    },
  ];
  return (
    <>
      <DashboardNavbar activeItem={0} />
      <DashboardLayout
        dashInfo="This provides a summary of your application details"
        analytics={companyAnalytics}
        link2="/hire-talent/dashboard/my-jobs"
        link1="/hire-talent/dashboard/profile"
        status1="Recruit"
        status2="Remote/hybrid"
      />
    </>
  );
};

export default page;
