import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import { reducers } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: "Pizza World" })
  : compose;

const enhancers = composeEnhancers(applyMiddleware(thunk, apiMiddleware));

export const store = createStore(reducers, enhancers);

export default store;
