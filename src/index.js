import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { BackgroundProvider } from "./context/bakgroundContext";
import store from "./store";
import {BackgroundService} from "./services";
import ErrorBoundary from "./components/ErrorBoudary";

const backgroundService = new BackgroundService();
ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BackgroundProvider value={backgroundService}>
        <App />
      </BackgroundProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
