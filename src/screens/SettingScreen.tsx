import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}> Setting Screen </Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colores.primary}
        />
      )}
    </View>
  );
};
