import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import * as AuthSession from 'expo-auth-session';
import { CLIENT_ID, REDIRECT_URI, SCOPE, RESPONSE_TYPE } from '@env';


import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

export default function SignIn({ navigation: { userData } }) {
  const navigation = useNavigation();
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState({});


  async function handleGoogleSignIn() {
    try {
      const encodeUriScope = encodeURI(SCOPE);
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeUriScope}`;

      const { type, params } = await AuthSession.startAsync({ authUrl });

      // const authSessionGoogle = await AuthSession.startAsync({ authUrl });
      if (type == 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userData = await response.json();
        setUser(userData)
        navigation.navigate('Home', { userData })
        setLoad(false);
      }
    } catch (error) {
      console.log('Session Google não conectada: ' + error);
    }
  }

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

      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
        delay={500}
      >
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu e-mail..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha..."
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // navigation.navigate('Home'),
            setLoad(true),
              handleGoogleSignIn()
          }}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}