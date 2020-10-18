import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ForgotPassword from '../Containers/ForgotPassword';
import LoginPage from '../Containers/LoginPage';
import {Easing, Animated} from 'react-native';
import styles from './Styles/NavigationStyles';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 450,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [-width, 0],
        extrapolate: 'clamp',
      });

      return {
        transform: [{translateX}],
      };
    },
  };
};

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: {screen: LoginPage},
    ForgotPassword: {
      screen: ForgotPassword,
    },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
    transitionConfig,
  },
);

export default createAppContainer(PrimaryNav);
