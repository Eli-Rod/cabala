import React from "react";
import { View, Text } from "react-native";

import * as Animatable from 'react-native-animatable'

function Loading() {
  // const animetions = {
  //   one: new Animated.Value(0),
  //   two: new Animated.Value(0),
  //   three: new Animated.Value(0),
  // };

  // function onAnimate(animation, nextAnimation) {
  //   Animated.sequence([
  //     Animated.timing(animation, {
  //       toValue: -10,
  //       duration: 400,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(animation, {
  //       toValue: 0,
  //       duration: 400,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();

  //   setTimeout(nextAnimation, 200)
  // };

  // function onStartAnimate() {
  //   function onThreeAnimation() {
  //     onAnimate(animetions.three, () => {
  //       setTimeout(onStartAnimate, 800)
  //     });
  //   };

  //   function onTwoAnimation() {
  //     onAnimate(animetions.two, onThreeAnimation);
  //   };

  //   onAnimate(animetions.one, onTwoAnimation);
  // };

  // useEffect(() => {

  // }, []);

  return (
    <View >
      <Animatable.View
        // style={styles.ball}
        color="#1abc9c"
      />

      <Animatable.View 
        // style={{ transform: [{ transLateY: animetions.two }] }}
        color="#f1c40f"
      />

      <Animatable.View 
        // style={{ transform: [{ transLateY: animetions.three }] }}
        color="#e74c3c"
      />

      <Text> View</Text>
    </View>
  )
};

export default Loading;