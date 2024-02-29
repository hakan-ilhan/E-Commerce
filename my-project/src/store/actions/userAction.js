import { instance } from "../../layout/axiosInstance";
import { userActionTypes } from "../reducers/userReducer";
import { toast } from "react-toastify";

export const setUser = (data) => {
  return { type: userActionTypes.SET_USER, payload: data };
};

export const logoutUser = () => {
  return { type: userActionTypes.LOGOUT_USER };
};

export const postLogin = (data, history) => (dispatch, getState) => {
  instance
    .post("/login", data)
    .then((res) => {
      console.log("loginData:", res);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data));
      history.push("/");
    })
    .catch((err) => {
      console.log("error", err);
      toast.error("INVALID INFORMATION", { autoClose: 3000 });
    });
};

export const tokenCheck = (token) => (dispatch) => {
  instance
    .get("/verify", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      toast.success(`Hoşgeldin ${res.data.name}`, { autoClose: 4000 });
      dispatch(setUser(res.data));
    })
    .catch((err) => {
      localStorage.removeItem("token");
    });
};
