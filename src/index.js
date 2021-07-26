import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { BackgroundProvider } from "./context/bakgroundContext";
import { WeatherProvider } from "./context/weatherContext";
import store from "./store";
import { BackgroundService } from "./services";
import { WeatherForecastService } from "./services";
import ErrorBoundary from "./components/ErrorBoudary";

const weatherService = new WeatherForecastService();
const backgroundService = new BackgroundService();
ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <WeatherProvider value={weatherService}>
        <BackgroundProvider value={backgroundService}>
          <App />
        </BackgroundProvider>
      </WeatherProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
