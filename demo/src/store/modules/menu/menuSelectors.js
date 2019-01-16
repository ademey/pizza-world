import { createScopedSelector } from "redux-scope-utils";
import { createSelector } from "reselect";
import { getData, getLoading } from "store/modules/loading";
import { MENU_DATA_SCOPE, CHECKOUT_SCOPE } from "./scopes";

const _findMenuItem = (menu, id) => menu.find(item => item.id === id);

export const getMenuData = createScopedSelector(getData, MENU_DATA_SCOPE);

export const getSelectedId = state => state.menu.order.selectedId;

export const getSelectedItem = createSelector(
  getMenuData,
  getSelectedId,
  (menuData, selectedId) =>
    menuData && selectedId ? _findMenuItem(menuData, selectedId) : {}
);

export const getCartItems = store => store.menu.order.cartItems;

export const getCartSize = store =>
  Object.values(getCartItems(store)).reduce((acc, curr) => acc + curr, 0);

export const getFormattedCartItems = createSelector(
  getMenuData,
  getCartItems,
  (menuData, cartItems) => Object.entries(cartItems).reduce((acc, [id, count]) => {
    const item = _findMenuItem(menuData, id);
    return [...acc, {...item, count}]
  }, [])
)

export const getCartSummary = createSelector(
  getFormattedCartItems,
  items => {
    const summary = {
      subtotal: items.reduce((acc, curr) => acc + (curr.price * curr.count) , 0),
      delivery: 300,
      tax: 0,
      total: 0 
  };

  summary.tax = summary.subtotal * 0.1;
  summary.total = summary.subtotal + summary.tax + summary.delivery;
  return summary;
})

export const getCheckoutInProgress = createScopedSelector(
  getLoading,
  CHECKOUT_SCOPE
)

export const getCheckoutResponse = createScopedSelector(
  getData,
  CHECKOUT_SCOPE
)

export const getCheckoutSuccess = createSelector(
  getCheckoutResponse,
  response => response && response.status === 'success'
);

export const getDeliveryTime = createSelector(
  getCheckoutResponse,
  response => response && response.deliveryTime
);