const BASE_ACTION = 'CheckList';
export const TOGGLE = `${BASE_ACTION}/TOGGLE`;

export const toggle = (id, scope) => ({
  type: TOGGLE,
  payload: id,
  scope
});
