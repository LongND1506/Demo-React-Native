import '../Config';
import DebugConfig from '../Config/DebugConfig';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RootContainer from './RootContainer';
import createStore from '../Redux';
import SplashScreen from 'react-native-splash-screen';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import {Provider as PaperProvider} from 'react-native-paper';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor(props) {
    super(props);

    const customTextProps = {
      style: {
        fontFamily: 'SVN-Avo',
      },
    };

    setCustomText(customTextProps);
    setCustomTextInput(customTextProps);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <PaperProvider>
          <RootContainer />
        </PaperProvider>
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
