import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/Validation/validation";
import { useLogin } from "../../api/useApiCall";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const { mutate, isPending, error } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("role", data?.role);
        localStorage.setItem("user", JSON.stringify(data?.user));
        navigate("/");
        toast.success(data?.message);
      },
      onError: (err) => {
        console.log(err);

        toast.error(err?.response?.data?.message);
      },
    });
    // send data to backend
  };

  return (
    <div className="flex items-center justify-center w-full h-screen p-5">
      <div className="bg-white shadow-md border border-black/10 rounded-xl p-4 w-full max-w-[400px] py-10">
        <div className="flex items-center w-full justify-center">
          <img src="/iconText.png" className="w-20" alt="Logo" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
          <div>
            <p>Enter email</p>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="border p-2 w-full rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <p>Enter Password</p>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="border p-2 w-full rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-buttonColor/90 text-white py-2 px-4 rounded hover:bg-buttonColor w-full"
          >
            {isPending ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
