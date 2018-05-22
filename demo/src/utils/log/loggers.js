import store from './store';
import * as actions from './acitons';

export const logFunction = name => store.dispatch(actions.logFunction(name));
