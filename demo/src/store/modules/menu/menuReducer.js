import { combineReducers } from "redux";
import { createScopedReducer } from "redux-scope-utils";
import { loadingReducer } from "store/modules/loading";
import orderReducer from "./orderReducer";
import { MENU_DATA_SCOPE, CHECKOUT_SCOPE } from "./scopes";

const menuReducer = combineReducers({
  data: createScopedReducer(loadingReducer, MENU_DATA_SCOPE),
  order: orderReducer,
  checkout: createScopedReducer(loadingReducer, CHECKOUT_SCOPE)
});

export default menuReducer;
