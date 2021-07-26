import React from "react";

const { Provider: WeatherProvider, Consumer: WeatherConsumer } =
  React.createContext();

export { WeatherProvider, WeatherConsumer };
