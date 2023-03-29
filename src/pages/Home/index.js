import React from "react";
import { View, Text } from 'react-native';

import * as Animatable from 'react-native-animatable';
import {
  useNavigation,
  // NavigationContainer
} from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from '../Welcome';
import SignIn from '../Signin';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  // const Drawer = createDrawerNavigator();
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Home</Text>
      </Animatable.View>

      {/* <Tab.Navigator >
        <Tab.Screen name="SignIn" component={SignIn} options={{tabBarStyle: { display: "none" }}} />
        <Tab.Screen name="Welcome" component={Welcome} options={{tabBarStyle: { display: "none" }}} />
      </Tab.Navigator> */}

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