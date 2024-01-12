"use client";
import ax from "@/functions/axiosInstance";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SingIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const body = {
      password: data.password,
      username: data.username,
    };
    console.log(body);
    ax.post("/login", body);
  };

  return (
    <div>
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-blue-700 drop-shadow-xl my-10">
              ورود
            </h1>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mt-6">
                <input
                  type="text"
                  {...register("username")}
                  id="username"
                  placeholder="User Name"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
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
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-700 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                حساب کاربری ندارید؟
                <Link
                  href="/auth/singUp"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  {" "}
                  ثبت نام
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingIn;
