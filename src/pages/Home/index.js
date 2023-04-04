import React from "react";
import { View, Text, Image, ImageBase } from 'react-native';

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
// import {User} from "../../components/User";

export default function Home(user) {
  const navigation = useNavigation();
  // const Drawer = createDrawerNavigator();
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createBottomTabNavigator();

  const userEmail = user.route.params.userData.email;
  const userNome = user.route.params.userData.name;
  const userImage = user.route.params.userData.picture;

  return (
    <View style={styles.container}>
      <View style={styles.userImage}>
        <Animatable.Image
          source={{ uri: userImage }}
        // source={{ uri: 'http://www.saopaulofc.net/media/246288/IMG_8284_crop_galeria.jpg' }}
        // source={require('../../assets/logoArvoreCabala250.png')}
        />
      </View>

      <View style={styles.userNome}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Home</Text>
        </Animatable.View>

        <Text>Nome: {userNome}</Text>
        <Animatable.Image
          animation="flipInY"
          // delay={400}
          source={{ uri: 'https://lh3.googleusercontent.com/a/AGNmyxZuGAkQ08Z0uQ9wQta6DYzLl3MMNgNYjo7bvrby=s96-c' }}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
        <Text>E-mail: {userEmail}</Text>
      </View>
      {/* <User user={user}/> */}
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