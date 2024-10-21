"use client";

import { talentsColumn } from "@/utilities/tableData";
import { userObject } from "@/utilities/typeDefs";
import { Loader2 } from "lucide-react";
import MainTable from "../Elements/Table/MainTable";
import { useGetAllTalents } from "@/hooks/admin-analytics-hook";

const TalentTable = () => {
  const filterArr = ["Frack Talents Pool"];
  const { talents, loading } = useGetAllTalents();

  return (
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">Manage Frack's Talent Pool</h2>
      <div className="flex w-full text-[#626263] md:text-lg font-bold mt-16 border-b border-[#CCD2D9]">
        {filterArr.map((item, idx) => (
          <span className={`tab active max-sm:h-[50px]`} key={idx}>
            {item}
          </span>
        ))}
      </div>
      {loading ? (
        <Loader2 className=" h-14 w-14 animate-spin ml-10 mt-10 text-[#000080]" />
      ) : talents.length === 0 ? (
        <p className="mt-10 text-[#000040] italic text-2xl">
          No data available at the moment.
        </p>
      ) : (
        <MainTable<userObject> data={talents} columns={talentsColumn} />
      )}
    </section>
  );
};

export default TalentTable;
