import { combineReducers } from 'redux';

import AuthReducer from './Auth.reducers';
import { productsApiReducer } from '@/services/ProductsApi';

const RootReducer = combineReducers({
  productsApi: productsApiReducer,
  auth: AuthReducer
});

export type AuthState = ReturnType<typeof RootReducer>;

export default RootReducer;
