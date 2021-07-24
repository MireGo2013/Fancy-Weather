import { BackgroundConsumer } from "../context/bakgroundContext";

const withBgImage = (fn) => (Component) => {
  return (props) => {
    return (
      <BackgroundConsumer>
        {(backgroundService) => {
          return <Component {...props} backgroundService={backgroundService} />;
        }}
      </BackgroundConsumer>
    );
  };
};

export default withBgImage;
