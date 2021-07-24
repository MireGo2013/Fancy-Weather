import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { BackgroundProvider } from "./context/bakgroundContext";
import store from "./store";
import BackgroundService from "./services";

const backgroundService = new BackgroundService();
ReactDom.render(
  <Provider store={store}>
    <BackgroundProvider value={backgroundService}>
      <App />
    </BackgroundProvider>
  </Provider>,
  document.getElementById("root")
);
