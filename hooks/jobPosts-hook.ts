import { JOB_API_END_POINT } from "@/utilities/constants/constants";
import { setLoading } from "@/redux/slices/authSlice";
import { setNotification } from "@/redux/slices/notificationSlice";
import { ADMIN_API_END_POINT } from "@/utilities/constants/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { setCompanyJobs } from "@/redux/slices/companyJobsSlice";

export const useGetAllJobs = () => {
  const dispatch = useDispatch();

  const [jobs, setJobs] = useState([]);
  const { loading } = useSelector((store: any) => store.auth);
  useEffect(() => {
    const fetchJobs = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/get`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setJobs(response.data.jobs);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch jobs";
        toast.error(errorMessage);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading };
};

export const useGetCompanyJobs = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading } = useSelector((store: any) => store.auth);

  const fetchJobs = async (id: string) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `${JOB_API_END_POINT}/getSingleCompanyJobs/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        dispatch(setCompanyJobs(response.data.jobs));
        router.push("/control-room/manage-companies/job");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch jobs";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { fetchJobs, loading };
};
