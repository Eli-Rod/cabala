import React from "react";
import { View, Text } from 'react-native';

import * as Animatable from 'react-native-animatable'
import {
  useNavigation,
  // NavigationContainer
} from "@react-navigation/native";

// import { createDrawerNavigator } from '@react-navigation/drawer'

import styles from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  // const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Home</Text>
      </Animatable.View>

      {/* <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" onPress={() => navigation.navigate('Home')}>Home</Drawer.Screen>
          <Drawer.Screen name="SignIn" onPress={() => navigation.navigate('SignIn')}>SignIn</Drawer.Screen>
          <Drawer.Screen name="Welcome" onPress={() => navigation.navigate('Welcome')}>Assinaturas</Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer> */}
    </View>
  )
}