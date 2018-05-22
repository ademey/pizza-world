const BASE_ACTION = 'Menu';
export const TOGGLE_OPTION = `${BASE_ACTION}/TOGGLE_OPTION`;
export const FOCUS_ITEM = `${BASE_ACTION}/FOCUS_ITEM`;

export const focusItem = id => ({
  type: FOCUS_ITEM,
  payload: id
});

export const toggleOption = id => ({
  type: TOGGLE_OPTION,
  payload: id
});
