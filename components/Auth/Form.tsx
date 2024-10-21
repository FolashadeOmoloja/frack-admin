import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import FormLogo from "@/components/Elements/FormLogo";
import { validationRules } from "@/utilities/constants";
import { useLoginAdmin } from "@/hooks/admin-login-hook";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { onSubmit: loginAdmin, loading } = useLoginAdmin();

  //add Item to backeend
  const addItem = async (data: any) => {
    if (data) {
      const adminData = {
        emailAddress: data.email.trim(),
        password: data.password.trim(),
      };
      await loginAdmin(adminData);
    }
  };

  const onSubmit = (data: any) => {
    addItem(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="md:max-w-[529px] max-sm:p-4">
      <div className="mb-6">
        <FormLogo />
        <h3 className="text-[#1B1818] font-semibold text-2xl mb-1">
          Log in to your dashboard
        </h3>
        <p className="text-gray-500 text-sm">
          we can unlock the power of talent and drive success for{" "}
          <br className="max-sm:hidden" /> businesses around the world.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your work address"
            {...register("email", {
              required: validationRules.email.required,
              pattern: validationRules.email.pattern,
            })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{`${errors.email.message}`}</span>
          )}
        </div>
        {/* password */}
        <div className="flex formdivs flex-col mb-6 gap-[6px]">
          <label>Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-10"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-600 text-sm">{`${errors.password.message}`}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#000080] text-white shadow-sm rounded-lg hover:shadow-xl hover:bg-[#000099] transition-all duration-300"
          disabled={isSubmitting}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </div>
          ) : (
            "Continue"
          )}
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
