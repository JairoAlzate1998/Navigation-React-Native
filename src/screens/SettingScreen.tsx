import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const SettingScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}> Setting Screen </Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
