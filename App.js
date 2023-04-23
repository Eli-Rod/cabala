import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native'

import WelcomeNavigation from './src/routes'
import ShowBottomTabs from './src/navigation/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#372d62" barStyle="light-content" />
      <WelcomeNavigation />
      {/* <ShowBottomTabs /> */}
    </NavigationContainer>
  );
}

// import Navigation from './src/navigation';

// export default function App() {
//   return (
//     <Navigation />
//   )
// }