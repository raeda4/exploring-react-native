import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer, // ✅ correct key name
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // ✅ correct middleware usage
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initializeStore;


//Back code because this at least allows the app to load, athough it doesn't update the Library

/*

const initializeStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer,
    preloadedState,
  })

  return store
}

*/


//This doesn't work, but is what it's supposed to be:

/*

const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer,
    preloadedState,
    middleware: [...getDefaultMiddleware(), sagaMiddleware]
  })

  sagaMiddleware.run(rootSaga)

  return store
}

*/