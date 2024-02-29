import { instance } from "../../layout/axiosInstance";
import { globalActionTypes } from "../reducers/globalReducer";

export const getRoles = (roles) => {
  return { type: globalActionTypes.GET_ROLES, payload: roles };
};

export const setCategories = (data) => {
  return { type: globalActionTypes.FETCH_CATEGORIES, payload: data };
};

export const fetchRoles = () => (dispatch, getState) => {
  instance.get("/roles").then((res) => {
    dispatch(getRoles(res.data));
    console.log("resp : ", res.data);
  });
};

export const fetchCategories = () => (dispatch) => {
  instance.get("/categories").then((res) => {
    dispatch(setCategories(res.data));
    console.log("categories:", res);
  });
};
