import React from 'react';
import { View, Text } from 'react-native';
import Routes from './routes';

import './config/Reactotronconfig'

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
      <Routes />
  </Provider>
);

export default App;