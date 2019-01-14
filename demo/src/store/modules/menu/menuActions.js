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
