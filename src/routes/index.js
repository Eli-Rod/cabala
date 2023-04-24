import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useNavigation,
  NavigationContainer
} from '@react-navigation/native'

// import Welcome from '../screens/Welcome';
// import SignIn from '../screens/Signin';
// import Home from '../screens/Home';
// import Loading from '../components/Loading';
// import User from '../components/User';

import {
  Configuracoes,
  Contato,
  Home,
  Signin,
  Welcome
} from '../screens'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const navigation = useNavigation();

export default function WelcomeNavigator() {

  return (
    <Tab.Navigator
      initialRouteName="Signin"
      screenOptions={{
        tabBarStyle: { display: "none" },
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export function Routes({navigation}) {

  return (
    <>
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={Home}
          screenOptions={{
            tabBarStyle: { display: "flex" },
            headerShown: true
          }}
        />

        {/* <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        /> */}

        <Tab.Screen
          name="Contato"
          component={Contato}
          screenOptions={{
            tabBarStyle: { display: "flex" },
            headerShown: false
          }}
        />

        <Tab.Screen
          name="Configuracoes"
          component={Configuracoes}
          screenOptions={{
            tabBarStyle: { display: "flex" },
            headerShown: false
          }}
        />

      </Tab.Navigator>


      {/* <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator> */}
    </>
  )
}