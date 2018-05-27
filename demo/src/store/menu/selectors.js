import { createSelector, createSelectorCreator } from 'reselect';
import { logFunction } from 'utils/log';
import memoize from 'lodash.memoize'

const getProps = (state, props) => props;

const hashFn = (...args) => {
  const hashed = args.reduce(
    (acc, val) => acc + '-' + JSON.stringify(val),
    ''
  );
  // logFunction(hashed);
  return hashed;
}
const deepCacheSelector = createSelectorCreator(memoize, hashFn)



export const getFocused = state => state.menu.focused;
export const getMenuItems = state => state.menu.items;
export const getMenuOptions = state => state.menu.options;
export const getCheckedOptions = state => state.menu.selectedOptions;


export const makeGetMenuItemsByCategory = () => createSelector(
  getMenuItems, getProps,
  (items, type) => {
    logFunction('getMenuItemsByCategory');
    return items.filter(item => item.type === type)
  }
);

export const expensive__getGetMenuItemsByCategory = (state, type) => {
  logFunction('expensive__getMenuItemsByCategory');
  const items = getMenuItems(state);
  return items.filter(item => item.type === type)
}

/**
 * Sum all the costs of optional toppings
 * @return {number} Cost in cents
 */
export const getOptionsTotal = createSelector(
  getMenuOptions,
  getCheckedOptions,
  (options, selected) => options.reduce((acc, curr) => {
    if (selected[curr.id]) return acc + getItemUnits(curr);
    return acc;
  }, 0)
);

/**
 * Selector to get the ID of the currently selected menu item,
 * then find the full item which has that ID.
 * @return {object} Menu Item
 */
export const getFocusedMenuItem = createSelector(
  getMenuItems,
  getFocused,
  (items, currentId) => {
    logFunction('getFocusedMenuItem');
    return items.find(item => item.id === currentId)
  }
);

/**
 * Get the cost in cents of the curretly selected menu item.
 * @return {number} Cost in cents
 */
const getSelectedCost = createSelector(
  getFocusedMenuItem,
  item => item ? getItemUnits(item) : 0
);

/**
 * Get the cost in cents of the curretly selected menu item,
 * plus any extra toppings.
 * @return {number} Cost in cents
 */
export const getItemTotal = createSelector(
  getOptionsTotal,
  getSelectedCost,
  (optionsTotal, selectedCost) => {
    logFunction('getItemTotal');
    return optionsTotal + selectedCost
  }
);


/**
 * Use`deepCacheSelector` to store all calculated values in an "infinate" cache.
 * @return {number} Cost in cents
 */
export const cache__getItemTotal = deepCacheSelector(
  getOptionsTotal,
  getSelectedCost,
  (optionsTotal, selectedCost) => {
    logFunction('cache__getItemTotal');
    return optionsTotal + selectedCost
  }
);

// MenuItem specific
export const getItemName = state => state.name;
export const getItemDescription = state => state.description;
export const getItemPrice = state =>
  state.price_monetary_fields && state.price_monetary_fields.display_string;
export const getItemUnits = state =>
  state.price_monetary_fields && state.price_monetary_fields.unit_amount;


