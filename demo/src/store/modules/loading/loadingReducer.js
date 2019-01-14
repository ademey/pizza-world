import { REQUEST, SUCCESS, FAILURE, RESET } from "./loadingActions";

const initialState = {
  isLoading: false,
  data: null,
  timestamp: null,
  error: null,
  endpoint: null
};

/**
 * Generic reducer to handle loading state and storage of data. This is designed
 * to work with the Redux API Middleware. The actions that this reducer handles
 * are created by the middleware.
 *
 * @param {object} state - Redux state
 * @param {Action} action - Redux action
 * @return {object}
 * @example <caption>Usage when combining reducers</caption>
 * const MyReducer = combineReducers({
 *   appThings: AppThingsReducer,
 *   asyncThings: createScopedReducer(LoadingReducer, 'asyncThings')
 * });
 * @example <caption>Dispatching scoped actions</caption>
 * dispatch(setLoading(true, 'asyncThings'));
 * ...
 * dispatch(setData(response.data, 'asyncThings'));
 * @example <caption>State</caption>
 * {
 *   appThings: {...},
 *   asyncThings: {
 *     isLoading: false,
 *     data: [...] // Whatever data is loaded
 *   }
 * }
 */
const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
    case FAILURE:
      // A FAIURE action will always have an error property.
      // The REQUEST action may also have an error, in which case we want to
      // differentiate it from a REQUEST that initiates a loading state
      if (action.error) {
        return {
          ...state,
          error: action.payload,
          isLoading: false,
          data: null,
          endpoint: action.meta && action.meta.endpoint
        };
      }
      return {
        ...state,
        data: null,
        error: null,
        isLoading: true,
        endpoint: action.meta && action.meta.endpoint
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        timestamp: action.meta.timestamp,
        endpoint: action.meta && action.meta.endpoint
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export default LoadingReducer;
