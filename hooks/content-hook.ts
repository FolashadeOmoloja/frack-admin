import { BLOG_API_END_POINT } from "@/utilities/constants/constants";
import { setLoading } from "@/redux/slices/authSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export const useGetAllBlogPosts = () => {
  const dispatch = useDispatch();

  const [blogPosts, setBlogPost] = useState([]);
  const { loading } = useSelector((store: any) => store.auth);
  useEffect(() => {
    const fetchblogPosts = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(`${BLOG_API_END_POINT}/get-blogs`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setBlogPost(response.data.blogPost);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch blogPost";
        toast.error(errorMessage);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchblogPosts();
  }, []);

  return { blogPosts, loading };
};
