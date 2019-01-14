import { combineReducers } from "redux";
import { menuReducer } from "./modules/menu";

export const reducers = combineReducers({
  menu: menuReducer
});
