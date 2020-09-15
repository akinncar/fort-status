import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";

import { Provider } from "react-redux";
import store from "./src/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <Routes />
    </Provider>
  );
};

export default App;
