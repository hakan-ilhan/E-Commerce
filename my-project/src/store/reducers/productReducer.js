export const productActionTypes = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FILTERED_PRODUCTS: "FILTERED_PRODUCTS",
  FILTERBY_TEXT: "FILTERBY_TEXT",
};
// “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED”
const initialState = {
  productList: [],
  totalProductcount: null,
  pageCount: null,
  activePage: null,
  fetchState: "",
  filteredProducts: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCTS:
      return { ...state, productList: action.payload };
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
        fetchState: "FETCHED",
      };

    case "SET_FETCH_STATE":
      return {
        ...state,
        fetchState: action.payload,
      };

    case "FETCH_PRODUCTS":
      return {
        ...state,
        fetchState: "FETCHING",
      };

    case "FETCH_PRODUCTS_FAILED":
      return {
        ...state,
        fetchState: "FAILED",
      };
  }
  return state;
};

export default productReducer;
