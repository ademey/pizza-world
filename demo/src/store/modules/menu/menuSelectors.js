import { createScopedSelector } from "redux-scope-utils";
import { createSelector } from "reselect";
import { getData } from "store/modules/loading";
import { MENU_DATA_SCOPE } from "./scopes";

export const getMenuData = createScopedSelector(getData, MENU_DATA_SCOPE);

export const getSelectedId = state => state.menu.order.selectedId;

export const getSelectedItem = createSelector(
  getMenuData,
  getSelectedId,
  (menuData, selectedId) =>
    menuData && selectedId ? menuData.find(item => item.id === selectedId) : {}
);

export const getCartItems = store => store.menu.order.cartItems;

export const getCartSize = store =>
  Object.values(getCartItems(store)).reduce((acc, curr) => acc + curr, 0);
