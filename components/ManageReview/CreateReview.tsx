"use client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { validationRules } from "@/utilities/constants";
import { useForm } from "react-hook-form";
import { CreateReview } from "@/hooks/info-hook";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const CreateReviewBox = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const { onSubmit: Create, loading } = CreateReview();

  const onSubmit = (data: any) => {
    if (data) {
      const review = {
        fullname: data.fullname.trim(),
        role: data.role.trim(),
        review: data.review.trim(),
      };
      Create(review);
    }
  };

  return (
    <section className="dashboard-container min-h-svh">
      <div
        onClick={() => router.back()}
        className="flex text-[#000080] gap-3 text-xl items-center font-bold mb-6 cursor-pointer"
      >
        <FaArrowLeft />
        <span>Go back</span>
      </div>
      <h2 className="text-2xl font-bold mb-1">Create New Review</h2>
      <section className="flex justify-center w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-sm md:w-[70%] py-8 md:px-16 sm:px-6 px-4 mt-16 max-sm:mt-10 max-sm:py-6"
        >
          <div className="flex   md:text-lg font-bold mt-16  justify-center">
            <span
              className={`tab active max-sm:h-[50px] text-xl w-full xsm:w-[200px]`}
            >
              Review Details
            </span>
          </div>
          <p className="text-gray-500 text-lg mt-9">Fill the form below</p>
          <section className="mt-8">
            <div className="flex formdivs flex-col mb-4 sm:mb-5 gap-[6px]">
              <label>
                Full Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                placeholder="Fullname of reviewer"
                {...register("fullname", {
                  required: validationRules.fullname.required,
                })}
              />
              {errors.fullname && (
                <span className="text-red-600 text-sm">{`${errors.fullname.message}`}</span>
              )}
            </div>
            <div className="flex formdivs flex-col mb-4 sm:mb-5 gap-[6px]">
              <label>
                Role <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                placeholder="Role of reviewer e.g CEO"
                {...register("role", {
                  required: validationRules.role.required,
                })}
              />
              {errors.role && (
                <span className="text-red-600 text-sm">{`${errors.role.message}`}</span>
              )}
            </div>
            <div className="flex formdivs flex-col mb-4 sm:mb-5 gap-[6px]">
              <label>
                Review <span className="text-red-600 text-base">*</span>
              </label>
              <textarea
                placeholder="Enter review"
                {...register("review", {
                  required: validationRules.review.required,
                  maxLength: {
                    value: 1000,
                    message: "review cannot exceed 1000 words",
                  },
                })}
                rows={10}
                className="resize-none"
              />
              {errors.review && (
                <span className="text-red-600 text-sm">{`${errors.review.message}`}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#000080] text-white shadow-sm rounded-lg btn-hover mt-20"
              disabled={isSubmitting}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </div>
              ) : (
                "Create Review"
              )}
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default CreateReviewBox;
