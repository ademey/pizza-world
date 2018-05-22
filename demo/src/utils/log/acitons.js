const BASE_ACTION = 'Logger';
export const LOG_FUNCTION = `${BASE_ACTION}/LOG_FUNCTION`;

export const logFunction = name => ({
  type: LOG_FUNCTION,
  payload: name
});
