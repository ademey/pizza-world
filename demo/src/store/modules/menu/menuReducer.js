import { combineReducers } from "redux";
import { createScopedReducer } from "redux-scope-utils";
import { loadingReducer } from "store/modules/loading";
import { MENU_DATA_SCOPE } from "./scopes";

const menuReducer = combineReducers({
  data: createScopedReducer(loadingReducer, MENU_DATA_SCOPE)
});

export default menuReducer;
