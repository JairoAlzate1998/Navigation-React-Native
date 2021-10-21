import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
//import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLatertalBasico } from './src/navigator/MenuLateralBasico';
const App = () => {
  return (
    <NavigationContainer>
      {/*<StackNavigator/>*/}
      <MenuLatertalBasico/>
    </NavigationContainer>
  );
};

export default App;
