export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const RESET = "RESET";

/**
 * Custom Redux Api Middleware type descriptor
 * @see https://github.com/agraboso/redux-api-middleware#request-type-descriptors
 *
 * This can be used in place of `REQUEST` so that the app skips storing any errors
 * from this request in the global error slice.
 */
export const REQUEST_SKIP_ERROR = {
  type: REQUEST,
  meta: { skipError: true }
};

/**
 * Use in place of `FAILURE` so that the app skips storing any errors from this request
 * in the global error slice
 */
export const FAILURE_SKIP_ERROR = {
  type: FAILURE,
  meta: { skipError: true }
};

/**
 * Resets the loading reducer to its initial state
 * @param {string} scope - Path to confine action
 * @return {Action}
 */
export const resetData = scope => ({
  type: RESET,
  meta: { scope }
});

export const scopeTypeDescriptors = (types, scope) =>
  types.map(item => {
    if (typeof item === "string") {
      return {
        type: item,
        meta: { scope }
      };
    }

    if (typeof item === "object") {
      return {
        ...item,
        meta: {
          ...item.meta,
          scope
        }
      };
    }

    return new Error("Type must be an object or string");
  });
