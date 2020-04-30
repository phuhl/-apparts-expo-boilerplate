import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import store, { persistor } from "./src/redux/store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import NavigationService from "./src/navigation/NavigationService";
import AppContainer from "./src/navigation/AppContainer";
import * as forceReload from "./src/helpers/force-reload.js";

const App = () => {
  return (
    <View>
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

const WithProvider = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default WithProvider;
