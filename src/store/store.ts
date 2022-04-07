import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { ticketsReducer } from 'store/reducers/ticketsReducer';

const rootReducer = combineReducers({
  ticketsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type rootReducerType = ReturnType<typeof rootReducer>;
