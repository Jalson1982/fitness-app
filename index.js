/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { store, persistor } from './src/state/store';

console.disableYellowBox = true;

function renderApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => renderApp);

