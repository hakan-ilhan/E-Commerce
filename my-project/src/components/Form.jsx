import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../layout/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles, getRoles } from "../store/actions/globalAction";

const initialData = {
  name: "",
  password: "",
  passwordValid: "",
  email: "",
  role_id: "3",
  store: {
    phone: "",
    name: "",
    tax_no: "",
    bank_account: "",
  },
};

function Sign() {
  const dispatch = useDispatch();
  const roles = useSelector((store) => store.globalReducer.roles);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({ defaultValues: initialData });
  const user = watch("username");
  let role = watch("role_id");

  useEffect(() => {
    dispatch(fetchRoles());
  }, []);

  console.log("role:", role);

  const submitHandler = (data) => {
    const { passwordValid, ...postData } = data;
    console.log("asdfa:", data);
    console.log("post:", postData);
    setLoading(true);
    setTimeout(() => {
      instance
        .post("/signup", postData)
        .then((res) => {
          console.log("subData:", res);
          history.goBack();
          toast.success(
            "You need to click link in email to activate your account!",
            { position: "top-right", autoClose: 3000 }
          );
          setLoading(false);
        })
        .catch((err) => {
          console.log("ERROR", err);
          setLoading(false);
          toast.error("Invalid", { autoClose: 2000 });
        });

      reset();
    }, 10000); // 2 saniye gecikme ekledik
  };

  if (roles.length < 1) {
    return;
  }

  return (
    <div className="py-12">
      <form
        className="max-w-lg mx-auto flex flex-col gap-4 text-categoryColor"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-2xl">
            Username
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your username"
            className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
            {...register("name", {
              required: "Doldurulması zorunlu alan",
              minLength: { value: 3, message: "En az 3 karakter gerekli" },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-2xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
            {...register("password", {
              required: "Doldurulması zorunlu alan",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Şifre küçük, büyük harf, sayı, özel karakter içermeli ve uzunluğu en az 8 karakter olmalı.",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>
          <label htmlFor="passwordValid" className="text-2xl">
            Password
          </label>
          <input
            type="password"
            id="passwordValid"
            placeholder="Enter your password"
            className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
            {...register("passwordValid", {
              required: "Doldurulması zorunlu alan",
              validate: (value) => {
                const pass = watch("password");
                return value === pass || "Şifreleriniz eşleşmiyor.";
              },
            })}
          />
          <p className="error">{errors.passwordValid?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email adress"
            className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
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
        <div className="flex gap-3 items-center">
          <label htmlFor="role_id" className="text-2xl">
            Role:
          </label>
          <select
            id="role_id"
            defaultValue={initialData.role_id}
            {...register("role_id")}
            className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
          >
            {roles.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        {watch("role_id") === "2" && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label htmlFor="storeName" className="text-2xl">
                Store Name:
              </label>
              <input
                type="text"
                id="storeName"
                placeholder="Enter Store Name"
                className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
                {...register("store.name", {
                  required: "Zorunlu Alan",
                  minLength: { value: 3, message: "En az 3 karakter" },
                })}
              />
              <p className="error">{errors.store?.name.message}</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="tel" className="text-2xl">
                Telephone Number:
              </label>
              <input
                type="tel"
                id="tel"
                placeholder="(555) (555) (55) (55)"
                className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
                {...register("store.phone", {
                  required: "Zorunlu",
                  pattern: {
                    value:
                      /\(?\+?(\d{2})?[ -]?([05]+\d{2})\)?[ -]?(\d{3})[ -]?(\d{4})?[ -]?(\d{2})[ -]?(\d{2})/,
                    message: "Geçerli bir telefon numarası giriniz.",
                  },
                })}
              />
              <p className="error">{errors.store?.phone.message}</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="tax" className="text-2xl">
                Tax ID:
              </label>
              <input
                id="tax"
                type="text"
                placeholder="TXXXXVXXXXXX"
                className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
                {...register("store.tax_no", {
                  required: "Zorunlu",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Lütfen doğru ID giriniz.",
                  },
                })}
              />
              <p className="error">{errors.store?.tax_no.message}</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="iban" className="text-2xl">
                IBAN{" "}
              </label>
              <input
                type="text"
                id="iban"
                placeholder="IBAN"
                className="border-2 rounded-md h-10 bg-lightGrey focus:outline-gray-500"
                {...register("store.bank_account", {
                  required: "Zorunlu",
                  pattern: {
                    value:
                      /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/,
                    message: "Geçerli bir IBAN giriniz.",
                  },
                })}
              />
              <p className="error">{errors.store?.bank_account.message}</p>
            </div>
          </div>
        )}

        <button
          disabled={loading}
          className="w-full rounded-md bg-blue-500 shadow-sm py-3 text-center hover:bg-blue-800 flex justify-center"
        >
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default Sign;
