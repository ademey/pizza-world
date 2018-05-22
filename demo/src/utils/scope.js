
export const scopedReducer = (reducer, scope) =>
  (state, action) => {
    if (
      state === undefined ||
      (action.scope && action.scope.startsWith(scope))
    ) return reducer(state, action);
    return state;
  };

export const stateSlice = (state, scope) => {
  const path = scope.indexOf('/') === -1 ? [scope] : scope.split('/');
  return path.reduce((value, pathSegment) => value[pathSegment], state);
}
