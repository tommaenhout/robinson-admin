
import React from 'react';
import {useFonts} from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import store from './src/app/store';
import { Provider } from 'react-redux'
import MainNavigator from './src/components/Navigator/MainNavigator';
import { init } from './src/db';

init().then(() => {
  console.log('Initialized database');
}).catch(err => {
  console.log('Initializing db failed.');
  console.log(err);
});

 const App = () => {
  const [loaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
    'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
    'Rubik-Bubbles': require('./assets/fonts/RubikBubbles-Regular.ttf'),
  });

  

  if (!loaded) return null;

  return (
    <>
      <StatusBar/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
   </>
  );
}

export default App
