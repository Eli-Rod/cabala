import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Configuracoes,
  Contato,
  Home,
  Signin,
  Welcome
} from '../screens'
import Routes from "../routes";

const Stack = createNativeStackNavigator();


export default function WelcomeNavigation() {

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Home" component={Routes} />
    </Stack.Navigator>
  )
}

export function ConfiguracoesNavigation() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Configuracoes" component={Configuracoes} />
    </Stack.Navigator>
  )
}

export function ContatoNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  )
}

export function HomeNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}