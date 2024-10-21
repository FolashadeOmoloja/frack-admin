import { setLoading } from "@/redux/slices/authSlice";
import { setTalent } from "@/redux/slices/talentSlice";
import { ADMIN_API_END_POINT } from "@/utilities/constants/constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export const useGetAllTalents = () => {
  const dispatch = useDispatch();

  const [talents, setTalents] = useState([]);
  const { loading } = useSelector((store: any) => store.auth);
  useEffect(() => {
    const fetchTalents = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          `${ADMIN_API_END_POINT}//get-talents`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setTalents(response.data.talents);
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

    fetchTalents();
  }, []);

  return { talents, loading };
};

export const useUpdateTalentProfileStatus = () => {
  const { loading } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();
  const onSubmit = async (status: any, id: any) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.put(
        `${ADMIN_API_END_POINT}/update-talent/${id}`,
        status,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { success, message, talent } = response.data;

      if (success) {
        toast.success(message);
        dispatch(setTalent(talent));
      } else {
        toast.error(message);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    onSubmit,
    loading,
  };
};
