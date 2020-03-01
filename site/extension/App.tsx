import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "~/store/store";
import { Router } from "~/screens/Router";

export const Bootstrap = () => {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
