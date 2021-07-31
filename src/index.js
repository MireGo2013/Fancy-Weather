import React from "react";
import ReactDom from "react-dom";
import AppContainer from "./containers";
import { Provider } from "react-redux";
import { BackgroundProvider } from "./context/bakgroundContext";
import { WeatherProvider } from "./context/weatherContext";
import store from "./store";
import { BackgroundService } from "./services";
import { WeatherForecastService } from "./services";
import ErrorBoundary from "./components/ErrorBoudary";
import { ContextLang } from "./context/langContext";
import { toggleLocalLang } from "./lang/toggleLocalLang";

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
