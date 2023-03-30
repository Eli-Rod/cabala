import React from "react";
import * as AuthSession from 'expo-auth-session';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = '1059005890895-bglff5kmuad8682t7thos4jun02ahs1d.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@eli.rod/cabalaapp';
      const SCOPE = encodeURI('profile email');
      const RESPONSE_TYPE = 'token';

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}$scope=${SCOPE}`;
      console.log({ authUrl })
      const authSessionGoogle = await AuthSession.startAsync({ authUrl });
      console.log(' ================Resultado requisição ================')
      console.log({ authSessionGoogle })
    } catch (error) {
      console.log('Session Google não conectada: ' + error);
    }
  }

  return (
    <View style={styles.container}>
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