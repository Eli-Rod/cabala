import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  ConfiguracoesNavigation,
  ContatoNavigation,
  HomeNavigation,
  WelcomeNavigation
} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs() {

  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeNavigation}/>
      <Tab.Screen name='Contato' component={ContatoNavigation}/>
      <Tab.Screen name='Welcome' component={WelcomeNavigation}/>
      <Tab.Screen name='Configuracoes' component={ConfiguracoesNavigation}/>
    </Tab.Navigator>
  )
}