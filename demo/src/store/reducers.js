import { combineReducers} from 'redux';
import { reducer as menu } from './menu';

/**
 * The initial state for this application is loaded from a json file when the
 * store is initiated. This data is stored in the same shape ({ location, menu })
 * as these combined reducers.
 * 
 * The `menu` reducer store the menu options, along with other reducers which
 * manage the selected meu items.
 * 
 * The `location` reducer is just simply a function which never modifies state.
 * This is because when the store is initated with the JSON data, only the data
 * which is handled by a reducer is store.
 * @see https://redux.js.org/api-reference/createstore#arguments
 * @type {function}
 * @param {object} state
 * @param {object} action
 * @return {object}
 */
export const reducers = combineReducers({
  location: (state = {}) => state,
  menu
});
