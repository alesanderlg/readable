import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import logger from 'redux-logger'

const reducer = combineReducers(reducers);

// Applying middlewares to the store
const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Creating the store configuration
const store = createStoreWithMiddleware(
  reducer,
  devTools
);

export default store;
