import { RSAA } from "redux-api-middleware";
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  scopeTypeDescriptors
} from "store/modules/loading";
import { MENU_DATA_SCOPE } from "./scopes";

export const fetchMenu = () => ({
  [RSAA]: {
    endpoint: "http://127.0.0.1:4001/menu",
    method: "GET",
    types: scopeTypeDescriptors([REQUEST, SUCCESS, FAILURE], MENU_DATA_SCOPE),
    headers: { "Content-Type": "application/json" }
  }
});

export const SET_SELECTED_ID = "SET_SELECTED_ID";
export const CLEAR_SELECTED_ID = "CLEAR_SELECTED_ID";
export const ADD_TO_CART = "ADD_TO_CART";

export const setSelectedId = id => ({
  type: SET_SELECTED_ID,
  payload: id
});

export const clearSelectedId = () => ({
  type: CLEAR_SELECTED_ID
});

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id
});
