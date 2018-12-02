import { SET_OPEN, SET_DATA, SET_ALL_DATA, RESET_DATA } from "./modalActions";

const initialState = {
  open: false,
  data: {}
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        open: action.payload
      };
    case SET_DATA: {
      const { key, value } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [key]: value
        }
      };
    }
    case SET_ALL_DATA:
      return {
        ...state,
        data: action.payload
      };
    case RESET_DATA: {
      return {
        ...state,
        data: {}
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
