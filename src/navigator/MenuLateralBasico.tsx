import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

export const MenuLatertalBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" options={{title:'Settings'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
};
