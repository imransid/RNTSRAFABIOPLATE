import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore, type Middleware } from 'redux';
import logger, { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reduxStore/reducers';
import rootSaga from '../reduxStore/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewareList: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']
  // blacklist: ['counterReducer']
  // timeout: null
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(createLogger(), ...middlewareList));
// Middleware: Redux Persist Persister
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
// Exports
export default { store, persistor };
