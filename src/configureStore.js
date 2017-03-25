import { createStore } from 'redux';
import mainReducer from './reducers/index';

const configureStore = () => {
  const store = createStore(
    mainReducer,
  );

  return store;
};

export default configureStore;
