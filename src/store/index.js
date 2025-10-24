import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

//const sagaMiddleware = createSagaMiddleware();

const initializeStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer,
    preloadedState,
  })

  return store
}

//sagaMiddleware.run(rootSaga);

export default initializeStore;
