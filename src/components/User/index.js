import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default function User({user}) {
  console.log('========================================')
  console.log({user})
  console.log('========================================')
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          delay={400}
          // source={require(user.picture)}
          style={{ width: '100%' }}
          resizeMode="contain"
        >
          {user.picture}
        </Animatable.Image>


      </View> 

      <Animatable.View delay={1100} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monte seu mapa cabalístico</Text>
        <Text style={styles.textLogin}>Faça o login para começar</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
};