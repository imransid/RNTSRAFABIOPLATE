import React, { type ReactElement } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@/theme';
import 'react-native-get-random-values';
import Navigator from './navigators';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './services/ProductsApi';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store/Store';

export const App = (): ReactElement => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <ApiProvider api={productsApi}>
          <ThemeProvider theme={theme}>
            <Navigator />
          </ThemeProvider>
        </ApiProvider>
      </PersistGate>
    </Provider>
  );
};
