export const userActionTypes = {
  SET_USER: "SET_USER",
  LOGOUT_USER: "LOGOUT_USER",
};
const initialState = {
  email: "",
  name: "",
  role_id: "",
  token: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return { ...action.payload };
    case userActionTypes.LOGOUT_USER:
      return { ...initialState };
  }
  return state;
};

export default userReducer;
