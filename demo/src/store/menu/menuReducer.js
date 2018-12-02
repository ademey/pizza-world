import { FOCUS_ITEM, TOGGLE_OPTION } from "./menuActions";

const initialState = {
  focused: null,
  selectedOptions: {}
};

/**
 * This reducer manages the selected menu item, and the selected
 * options from the OptionsSidebar. When this applications store is initiated,
 * the state is hydrated with data from `data/app.json`.
 *
 * @param {object} state
 * @param {object} action - Redux Action
 * @return {object} state
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS_ITEM: {
      const id = action.payload;
      return {
        ...state,
        focused: id
      };
    }

    case TOGGLE_OPTION: {
      const id = action.payload;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [id]: !state.selectedOptions[id]
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
