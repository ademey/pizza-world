import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import appData from 'data/app.json';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'Pizza World' })
  : compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunk)
);

export const store = createStore(reducers, appData, enhancers);


export default store;
