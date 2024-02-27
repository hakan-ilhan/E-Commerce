export const globalActionTypes = {
  GET_ROLES: "GET_ROLES",
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
  }
  return state;
};

export default globalReducer;
