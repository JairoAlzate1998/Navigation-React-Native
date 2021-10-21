import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import { MenuLatertalBasico } from './src/navigator/MenuLateralBasico';
import {MenuLatertal} from './src/navigator/MenuLateral';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
const App = () => {
  return (
    <NavigationContainer>
      {/*<StackNavigator/>*/}
      {/*<MenuLatertalBasico/>*/}
      <MenuLatertal />
    </NavigationContainer>
  );
};

export default App;
