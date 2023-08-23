import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import App from "./app";

const AppContainer: () => React$Node = () => {
  const { store } = configureStore();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <App />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default AppContainer;