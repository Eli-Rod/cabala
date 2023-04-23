import React, { useReducer } from "react";
import {
  View,
  Image,
  Text,
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function userDrawer() {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  console.log('Entrou no userDrawer')

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" onPress={() => navigation.navigate('Home')}>Home</Drawer.Screen>
        <Drawer.Screen name="SignIn" onPress={() => navigation.navigate('SignIn')}>SignIn</Drawer.Screen>
        <Drawer.Screen name="Welcome" onPress={() => navigation.navigate('Welcome')}>Assinaturas</Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


export default function User({
  userImage,
  userName,
  userEmail
}) {

  console.log('========================================')
  console.log({ userImage })
  console.log({ userName })
  console.log({ userEmail })
  console.log('========================================')
  return (
    <View >


      <Image
        source={require('../../assets/logoArvoreCabala250.png')}
        onPress={() => {
          console.log('aqui')
          userDrawer()
        }
        }
      // source={{ uri: 'https://lh3.googleusercontent.com/a/AGNmyxZuGAkQ08Z0uQ9wQta6DYzLl3MMNgNYjo7bvrby=s96-c' }}
      // source={require('../../assets/logoArvoreCabala250.png')}
      />

      <Text>Nome: {userName}</Text>
      <Text>E-mail: {userEmail}</Text>

    </View>
  )
};