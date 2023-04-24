import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          delay={400}
          source={require('../../assets/logoArvoreCabala250.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={1100} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monte seu mapa cabalístico</Text>
        <Text style={styles.textLogin}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}