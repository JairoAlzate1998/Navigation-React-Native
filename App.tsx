import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import { MenuLatertalBasico } from './src/navigator/MenuLateralBasico';
import {MenuLatertal} from './src/navigator/MenuLateral';
import {LogBox} from 'react-native';
import {AuthProvider} from './src/context/AuthContext';
//import { Tabs } from './src/navigator/Tabs';
LogBox.ignoreLogs(['Reanimated 2']);
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLatertal />
        {/*<StackNavigator/>*/}
        {/*<MenuLatertalBasico/>*/}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
