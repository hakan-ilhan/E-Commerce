import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../store/actions/userAction";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const { push } = useHistory();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(postLogin(data, history, push));
  };

  return (
    <div className="py-24 ">
      <form
        className="max-w-lg m-auto flex flex-col gap-5 text-categoryColor"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
            placeholder="Enter your email"
            id="email"
            type="email"
            {...register("email", {
              required: "Doldurulması zorunlu alan",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Geçersiz email",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-2xl" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter your password"
            id="password"
            type="password"
            className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
            {...register("password")}
          />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="text-xl">
            Remember Me
          </label>
        </div>
        <button className="w-full rounded-md bg-blue-500 shadow-sm py-3 text-center hover:bg-blue-800 flex justify-center">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
