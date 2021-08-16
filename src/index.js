import React from "react";
import ReactDom from "react-dom";
import AppContainer from "./containers";
import { Provider } from "react-redux";
import store from "./store";
import { BackgroundProvider } from "./context/bakgroundContext";
import { BackgroundService } from "./services";
import { WeatherProvider } from "./context/weatherContext";
import { WeatherForecastService } from "./services";
import { ContextLang } from "./context/langContext";
import { toggleLocalLang } from "./lang/toggleLocalLang";
import ErrorBoundary from "./components/ErrorBoudary";
import "./style.css";

const weatherService = new WeatherForecastService();
const backgroundService = new BackgroundService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ContextLang.Provider value={toggleLocalLang}>
        <WeatherProvider value={weatherService}>
          <BackgroundProvider value={backgroundService}>
            <AppContainer />
          </BackgroundProvider>
        </WeatherProvider>
      </ContextLang.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
