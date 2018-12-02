const BASE_ACTION = "MODAL/";
export const SET_OPEN = `${BASE_ACTION}SET_OPEN`;
export const SET_DATA = `${BASE_ACTION}SET_DATA`;
export const SET_ALL_DATA = `${BASE_ACTION}SET_ALL_DATA`;
export const RESET_DATA = `${BASE_ACTION}RESET_DATA`;

/**
 * Set the open state of a modal
 * @param {boolean} open - Should the modal be open
 * @return {object} Action
 */
export const setOpen = open => ({
  type: SET_OPEN,
  payload: open
});

/**
 * Set any value on the `data` part of the ModalReducer state
 * @param {string} key - Name of property to set on `data`
 * @param {*} value - Any value to set
 * @return {object} Action
 */
export const setData = (key, value) => ({
  type: SET_DATA,
  payload: { key, value }
});

/**
 * Set the entire `data` property of state. Can be used to hydrate modal state.
 * @param {object} data - Object to replace `data` with
 * @return {object} Action
 */
export const setAllData = data => ({
  type: SET_ALL_DATA,
  payload: data
});

/**
 * Resets the `data` part of the ModalReducer state to an empty object
 * @return {object} Action
 */
export const resetData = scope => ({
  type: RESET_DATA
});
