export const globalActionTypes = {
  GET_ROLES: "GET_ROLES",
  FETCH_CATEGORIES: "FETCH_CATEGORIES",
};

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalActionTypes.GET_ROLES:
      return { ...state, roles: action.payload };
    case globalActionTypes.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
  }
  return state;
};

export default globalReducer;
