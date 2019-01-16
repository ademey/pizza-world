import { SET_SELECTED_ID, CLEAR_SELECTED_ID, ADD_TO_CART } from "./menuActions";

const intialState = {
  selectedId: null,
  cartItems: {}
};

const orderReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ID:
      return {
        ...state,
        selectedId: action.payload
      };
    case CLEAR_SELECTED_ID:
      return {
        ...state,
        selectedId: null
      };
    case ADD_TO_CART:
      return {
        ...state,
        selectedId: null,
        cartItems: {
          ...state.cartItems,
          [action.payload]: 1
        }
      };
    default:
      return state;
  }
};

export default orderReducer;
