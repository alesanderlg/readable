import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from '../redux/reducers/index';
import logger from 'redux-logger'

// Applying middlewares to the store
const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Creating the store configuration
const store = createStoreWithMiddleware(
  reducer,
  devTools
);

export default store;
