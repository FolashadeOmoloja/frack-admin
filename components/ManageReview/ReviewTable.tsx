"use client";

import { useGetAllReviews } from "@/hooks/info-hook";
import MainTable from "../Elements/Table/MainTable";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Reviews } from "@/utilities/typeDefs";
import { reviewColumns } from "@/utilities/tableData";

const ReviewTable = () => {
  const { reviews, loading } = useGetAllReviews();
  const router = useRouter();

  return (
    <section className="dashboard-container min-h-svh">
      <div
        onClick={() => router.push("/control-room")}
        className="flex text-[#000080] gap-3 text-xl items-center font-bold mb-6 cursor-pointer"
      >
        <FaArrowLeft />
        <span>Go back</span>
      </div>
      <h2 className="text-2xl font-bold mb-1">
        Manage Success stories/ Reviews
      </h2>
      <span className="text-[#7C8698]">
        Overview of success stories on frack
      </span>
      <div className="flex w-full text-[#000080] md:text-lg font-bold mt-16 border-b-[3px] border-[#000080]">
        <span className={`tab active max-sm:h-[50px]`}>
          Frack Success Stories
        </span>
      </div>

      {loading ? (
        <Loader2 className=" h-14 w-14 animate-spin ml-10 mt-10 text-[#000080]" />
      ) : reviews.length === 0 ? (
        <p className="mt-10 text-[#000040] italic text-2xl">
          No data available at the moment.
        </p>
      ) : (
        <MainTable<Reviews> data={reviews} columns={reviewColumns} />
      )}

      <button
        onClick={() => router.push("/control-room/manage-reviews/create")}
        className="py-4 px-6 max-w-[300px] mt-10 bg-[#000080] text-white rounded-md font-semibold btn-hover"
      >
        Create Review
      </button>
    </section>
  );
};

export default ReviewTable;
