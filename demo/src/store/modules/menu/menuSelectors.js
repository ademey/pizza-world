import { createScopedSelector } from "redux-scope-utils";
import { getData } from "store/modules/loading";
import { MENU_DATA_SCOPE } from "./scopes";

export const getMenuData = createScopedSelector(getData, MENU_DATA_SCOPE);
