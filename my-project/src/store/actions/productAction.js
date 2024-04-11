import { instance } from "../../layout/axiosInstance";
import { productActionTypes } from "../reducers/productReducer";

export const setProductList = (data) => {
  return { type: productActionTypes.FETCH_PRODUCTS, payload: data };
};

export const setFetchState = (fetchState) => {
  return {
    type: "SET_FETCH_STATE",
    payload: fetchState,
  };
};

export const fetchProducts = (queryParams) => (dispatch) => {
  dispatch(setFetchState("FETCH_PRODUCTS"));
  return new Promise((resolve, reject) => {
    instance
      .get("/products", { params: queryParams })
      .then((res) => {
        const products = res.data;
        dispatch(setProductList(products));
        dispatch(setFetchState("FETCHED"));
        console.log(products);
        resolve();
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(setFetchState("FAILED"));
        reject(error);
      });
  });
};
