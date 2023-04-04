import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native'

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import Home from '../pages/Home';
import Loading from '../components/Loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {

  return (
    <>
      <Tab.Navigator >
        <Tab.Screen
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
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarStyle: { display: "flex" },
            headerShown: false
          }}
        />

        <Tab.Screen
          name="Loading"
          component={Loading}
          options={{
            tabBarStyle: { display: "none" },
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