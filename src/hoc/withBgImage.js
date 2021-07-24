import { BackgroundConsumer } from "../context/bakgroundContext";

const withBgImage = (fn) => (Component) => {
  return (props) => {
    return (
      <BackgroundConsumer>
        {(backgroundService) => {
          return (
            <Component
              {...props}
              getBackground={backgroundService.getBackground}
            />
          );
        }}
      </BackgroundConsumer>
    );
  };
};

export default withBgImage;
