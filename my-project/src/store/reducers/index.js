import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./ShoppingCartReducer";
import storeReducer from "./storeReducer";
const rootReducer = combineReducers({
  globalReducer,
  userReducer,
  productReducer,
  shoppingCartReducer,
  storeReducer,
});
export default rootReducer;
