import { LOG_FUNCTION } from './acitons';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_FUNCTION: {
      const name = action.payload;
      return {
        ...state,
        [name]: state[name] ? state[name] + 1 : 1
      }
    }
    default: 
      return state;
  }
};

export default reducer;
