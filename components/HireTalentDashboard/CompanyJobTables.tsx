"use client";

import { useEffect, useState } from "react";
import JobTable from "../TalentDashboard/JobTable";
import {
  companyActiveColumns,
  hiredCandidatesColumn,
  closedJobsColumns,
  JobPosted,
} from "@/utilities/tableData";
import { userObject } from "@/utilities/constants/typeDef";
import { useGetCompanyJobs } from "@/hooks/job-hook";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

type IsActiveState = {
  [key: number]: boolean;
};

const CompanyJobTables = () => {
  const filterArr = ["Active Applications", "Closed Jobs", "Hired Talents"];
  const { jobs, loading } = useGetCompanyJobs();
  const [active, setActive] = useState<IsActiveState>({ 0: true });
  const [changeTable, setChangeTable] = useState(0);
  const { user } = useSelector((store: any) => store.auth);

  // Function to filter jobs based on status
  const filterJobs = (status: string) => {
    return jobs.filter((job) =>
      //@ts-ignore
      job.status?.toLowerCase().includes(status.toLowerCase())
    );
  };

  // Recalculate the jobs when `jobs` or `changeTable` changes
  const openedJobs = changeTable === 0 ? filterJobs("open") : [];
  const closedJobs = changeTable === 1 ? filterJobs("closed") : [];
  const hiredCandidates: string | any[] = [];

  const activeFunc = (idx: number) => {
    const newState: IsActiveState = {};
    filterArr.forEach((_, i) => (newState[i] = i === idx));
    setActive(newState);
    setChangeTable(idx); // Change the table based on active tab index
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">
        {mounted && user?.companyName ? `${user.companyName}` : "You can"}, see
        how your recruitment is going
      </h2>
      <span className="text-[#7C8698]">
        This is your complete job list overview
      </span>
      <div className="flex w-full text-[#626263] md:text-lg font-bold mt-16 border-b border-[#CCD2D9]">
        {filterArr.map((item, idx) => (
          <span
            className={`tab ${active[idx] ? "active" : ""} max-sm:h-[50px]`}
            key={idx}
            onClick={() => activeFunc(idx)}
          >
            {item}
          </span>
        ))}
      </div>

      {changeTable === 0 ? (
        loading ? (
          <Loader2 className=" h-14 w-14 animate-spin ml-10 mt-10 text-[#000080]" />
        ) : openedJobs.length === 0 ? (
          <p className="mt-10 text-[#000040] italic text-2xl">
            No data available at the moment.
          </p>
        ) : (
          <JobTable<JobPosted>
            data={openedJobs}
            columns={companyActiveColumns}
          />
        )
      ) : changeTable === 1 ? (
        loading ? (
          <Loader2 className=" h-14 w-14 animate-spin ml-10 mt-10 text-[#000080]" />
        ) : closedJobs.length === 0 ? (
          <p className="mt-10 text-[#000040] italic text-2xl">
            No data available at the moment.
          </p>
        ) : (
          <JobTable<JobPosted> data={closedJobs} columns={closedJobsColumns} />
        )
      ) : changeTable === 2 ? (
        hiredCandidates.length === 0 ? (
          <p className="mt-10 text-[#000040] italic text-2xl">
            No data available at the moment.
          </p>
        ) : (
          <JobTable<userObject>
            data={hiredCandidates}
            columns={hiredCandidatesColumn}
          />
        )
      ) : null}
    </section>
  );
};

export default CompanyJobTables;
