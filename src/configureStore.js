import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import mainReducer from './reducers/index';

const configureStore = () => {
  const store = createStore(
    mainReducer,
    applyMiddleware(
      logger,
    ),
  );

  return store;
};

export default configureStore;
