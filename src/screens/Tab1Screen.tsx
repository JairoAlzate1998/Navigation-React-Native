import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="apps-outline" />
        <TouchableIcon iconName="bicycle-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="contrast-outline" />
        <TouchableIcon iconName="glasses-outline" />
        <TouchableIcon iconName="headset-outline" />
      </Text>
    </View>
  );
};
