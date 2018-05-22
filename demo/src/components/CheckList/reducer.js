import { TOGGLE } from './actions';

const initalState = {};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE:
      const id = action.payload;
      return {
        ...state,
        [id]: !state[id] 
      }
    default:
      return state;
  }
}

export default reducer;
