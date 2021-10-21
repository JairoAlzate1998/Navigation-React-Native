import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
//import {StackNavigator} from './StackNavigator';
import {SettingScreen} from '../screens/SettingScreen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLatertal = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar*/}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.enfermeriaencardiologia.com/wp-content/uploads/icono-de-usuario.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/*Opciones del menu*/}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'            
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={23} color="black" />
          <Text style={styles.menuTexto}> Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'            
          }}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Icon name="cog-outline" size={23} color="black" />
          <Text style={styles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
