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