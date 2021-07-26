import { WeatherConsumer } from "../context/weatherContext";

const withWeatherService = (fn) => (MyComponent) => {
  return (props) => {
    return (
      <WeatherConsumer>
        {(weatherService) => {
          return <MyComponent {...props} weatherService={weatherService} />;
        }}
      </WeatherConsumer>
    );
  };
};

export default withWeatherService;
