"use client";
import Link from "next/link";
import ax from "@/functions/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    const body = {
      password: data.password,
      username: data.name,
    };
    setIsLoading(true);
    ax.post("/register/", body)
      .then((res) => {
        router.push("/");
      })
      .catch((er) => alert("کاربر از قبل وجود دارد"))
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-blue-700 drop-shadow-xl my-10">
              ثبت نام
            </h1>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mt-6">
                <input
                  type="text"
                  {...register("name")}
                  id="name"
                  placeholder="User Name"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  User Name
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "این فیلد اجباری است",
                    },
                  })}
                  id="password"
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs">
                  {errors.password.message}
                </p>
              )}
              <div className="my-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-blue-700 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  {isLoading ? <span> loading </span> : "Sign up"}
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                آیا حساب کاربری دارید؟
                <Link
                  href="/auth/singIn"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  ورود
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingUp;
